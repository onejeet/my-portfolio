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
        this.props.updateFilter(txt);
    }

    filterRepos = (repos) => {
        const { filter } = this.props;
        if(repos && filter){
            console.log(filter.toLowerCase());
            return repos.filter((r) => r.tags.includes(filter.toLowerCase()));
        }else{
            return repos;
        }
    }

    render(){
        const { repos } = this.props;
        let filteredRepos = repos ? this.filterRepos(repos) : null;
        console.log(filteredRepos);
        return (
            <div className="projects">
                <div className="controls">
                    <div className="filters">
                        {
                            filterList.map((f) =>
                                <p onClick={(e) => this.handleFilterClick(e)} key={f}>{f} </p>
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