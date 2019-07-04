import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RepositoryBox from './RepositoryBox';
import { updateRepos } from '../actions'

class Projects extends PureComponent {

    componentDidMount(){
        this.getRepos(); 
    }

    getRepos = () => {
        let repos;
        fetch('https://api.github.com/users/onejeet/repos?sort=updated-desc')
        .then((response) => response.json())
        .then((data)=>{
            repos = data.filter((repo)=> repo.fork !== true );
            this.props.updateRepos(repos);
        })
        .catch((e) => {
            console.log("Error Occured: "+e);
        });
    }

    render(){
        const { repos } = this.props;
        return (
            <div className="projects">
                <div className="controls">
                    
                </div>
                <div className="main">
                    {repos.map((repo) =>
                        <RepositoryBox
                        key = {repo.id}
                        project = {repo}
                        />
                    )}
                </div>
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
        updateRepos :(repos) => dispatch(updateRepos(repos))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);