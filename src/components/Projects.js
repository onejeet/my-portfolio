import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RepositoryBox from './RepositoryBox';
import { updateRepos, updateFilter } from '../actions';
import loader from '../assets/loader-2.gif';

let filterList = ['ES6', 'ReactJS', 'Redux', 'SASS'];

class Projects extends PureComponent {

    componentDidMount(){
        this.getRepos(); 
    }

    getRepos = () => {
        let repos;
        fetch('https://api.github.com/users/onejeet/repos?sort=updated-desc')
        .then((response) => response.json())
        .then((data)=>{
            repos = data.filter((repo, i)=> {
                return repo.fork !== true ;
            });
            //this.props.updateRepos(repos);
            this.getTopics(repos);
        })
        .catch((e) => {
            console.log("Error Occured: "+e);
        });
    }

    getTopics = (repos) => {
        let newRepos = [];
        let requests = [];
        repos.map((repo) => {
            requests.push({
                'repo' : repo,
                'url': `https://api.github.com/repos/onejeet/${repo.name}/topics`
            });
        });

        Promise.all(requests.map((req) => {
           return (fetch(req.url, {
                headers: {
                    'Accept': 'application/vnd.github.mercy-preview+json'
                }
            }).then((response) => response.json()
            ).then((data)=> {
                req.repo['tags'] = data.names;
                newRepos.push(req.repo);        
            })
           );
        })).then(() => {
            this.props.updateRepos(newRepos);
        });
    }

    handleFilterClick = (e) => {
        let txt = e.target.textContent;
        this.props.updateFilter(txt.trim().toLowerCase());
    }

    filterRepos = (repos, filter) => {
        if(repos && filter){
            if(filter === 'all'){
                return repos;
            }
            return repos.filter((r) => r.tags.includes(filter));
        }else{
            return repos;
        }
    }

    render(){
        const { repos, filter } = this.props;
        let filteredRepos = repos ? this.filterRepos(repos, filter) : null;
        return (
            <div className="projects">
                <div className="controls">
                    <div className="filters">
                        <label>Filters:</label>
                        <p className={filter === 'all'? 'active': ''} onClick={(e) => this.handleFilterClick(e)}>All</p>
                        {
                            filterList.map((f) =>
                                <p className={filter === f.toLowerCase() ? 'active': ''} onClick={(e) => this.handleFilterClick(e)} key={f}>{f} </p>
                            )
                        }
                    </div>
                </div>
                {
                    filteredRepos
                    ? <div className="main">
                    {filteredRepos.map((repo) =>
                        <RepositoryBox
                        key = {repo.id}
                        project = {repo}
                        />
                    )}
                    </div>
                    :
                    <div className="loader">
                        <img src={loader} alt="loader"/>
                    </div>
                }     
            </div>
        );
    } 
}

function mapStateToProps(state){
    return {
        repos: state.currentRepos.repos,
        filter: state.currentFilter.filter
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateRepos :(repos) => dispatch(updateRepos(repos)),
        updateFilter : (filter) => dispatch(updateFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);