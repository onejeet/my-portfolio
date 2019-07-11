import React, { PureComponent } from 'react';

let colors = {
    'JavaScript':'#f1e05a',
    'PHP': '#4F5D95',
    'HTML':'#e34c26',
    'C':'#555555',
    'CSS': '#563d7c'
}

class RepositoryBox extends PureComponent{

    nameFormatter = (name) =>  {
        let st = name.split('-');
        return st.map((w) => w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
    }

    render(){
        const { project} = this.props;
        let color = colors[project.language] ? colors[project.language] : '#000000';
        return (
            <div className="card">
                <h2 className="title"><i className="fa fa-folder" aria-hidden="true"></i><a href={project.html_url} target="_blank" rel="noreferrer noopener">{this.nameFormatter(project.name)}</a></h2>
                <p className="description">{project.description}</p>
                <p className="language"><span style={{backgroundColor:color}}></span>{project.language}</p>
                { project.homepage && <p className="live"><span className="live-indicator"></span><a href={project.homepage} target="_blank" rel="noopener noreferrer">Live</a></p>}
                <p className="topics">
                    { project.tags && project.tags.map((t) =>
                            <span className="tag" key={t} >{t}</span>
                        )}
                </p>
            </div>
        );
    }
}

export default RepositoryBox;