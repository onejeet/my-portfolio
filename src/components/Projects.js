import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RepositoryBox from './RepositoryBox';
import { updateRepos } from '../actions';
import loader from '../assets/loader-2.gif';

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

    render(){
        const { repos } = this.props;
        return (
            <div className="projects">
                <div className="controls">
                    
                </div>
                {
                    repos
                    ? <div className="main">
                    {repos.map((repo) =>
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
        repos: state.currentRepos.repos
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateRepos :(repos) => dispatch(updateRepos(repos)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);