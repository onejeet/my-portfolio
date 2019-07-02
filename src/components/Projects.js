import React, { PureComponent } from 'react';
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
            repos = data.filter((repo)=> repo.fork !== true && repo.id !== 41561483);
        })
        .catch((e) => {
            console.log("Error Occured: "+e);
        });
    }

    render(){
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


export default Projects;