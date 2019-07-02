import React from 'react';

function nameFormatter(name){
    let st = name.split('-');
    return st.map((w) => w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}

const RepositoryBox = (props) =>{
    let project = props.project;
    let color = project.language === 'JavaScript' ? '#ffee55' : '#56b3d6';
    return (
            <div className="project">
               <h2 className="title"><i className="fa fa-folder" aria-hidden="true"></i><a href={project.html_url} target="_blank" rel="noreferrer noopener">{nameFormatter(project.name)}</a></h2>
               <p className="description">{project.description}</p>
               <p className="language"><span style={{backgroundColor:color}}></span>{project.language}</p>
            </div>
    );
}


export default RepositoryBox;