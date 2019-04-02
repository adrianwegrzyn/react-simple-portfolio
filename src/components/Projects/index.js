import React, {Component} from 'react';
import './style.css'
import MyProject from "./myProject";
import descriptionProjects  from './projectList'

class ProjectsList extends Component {

    render() {
        return (
            <div id="projects" className='container-fluent backgroundProjects'>
                <div className='row py-4'>
                    {descriptionProjects.map(descriptionProject => <MyProject title={descriptionProject.title}
                                                                              description={descriptionProject.description}
                                                                              icon={descriptionProject.icon}
                                                                              link={descriptionProject.link}/>)}

                </div>
            </div>
        );
    }
}

export default ProjectsList;
