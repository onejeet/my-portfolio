import React, { PureComponent } from 'react';
import SingleProject from './RepositoryBox';
import RepositoryBox from './RepositoryBox';
let repos = [];

class Projects extends PureComponent {

    componentDidMount(){
        this.getRepos(); 
    }

    getRepos = () => {
        fetch('https://api.github.com/users/onejeet/repos')
        .then((response) => response.json())
        .then((data)=>{
        repos = data.filter((repo)=> repo.fork !== true);
        })
        .catch((e) => {
            console.log("Error Occured: "+e);
        });
    }

    render(){
        return (
            <div className="projects">
                {repos.map((repo) =>
                    <RepositoryBox
                    key = {repo.id}
                    project = {repo}
                    />
                )}
            </div>
        );
    } 
}


export default Projects;