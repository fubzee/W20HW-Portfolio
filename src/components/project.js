import React from "react";
// import Tech from "./technology";
import projectData from './projectdata';

// function Project(props) {
function Project () {
    return (
        <div>
        {projectData.map(project => (
        <div>
            <br></br>
            <div className = "container">
                <hr></hr>
                <div className="row">
                    <div className = "col-md-4">
                        <h3>{project.title}</h3>
                    </div>
                    <div className = "col-md-8">   
                        <i className="bi bi-globe2"></i><a href={project.deployedlink}> {project.linkname}</a>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className = "col-md-4">
                        <p><a href={project.deployedlink}>
                        <img src={project.image.picture} alt="" 
                        className='responsive' 
                        width = {project.image.width} 
                        height = {project.image.height}></img></a></p>
                    </div>
                    <div className = "col-md-4">
                        <b> Brief:</b>
                        <p>{project.description}</p>
                    </div>
                    <div className = "col-md-4">
                        <b> Technologies Used: </b>
                        <ul>
                        {project.tech.map(tech => (
                        
                            <li className = {tech.icon}> {tech.type}</li> 
                        ))}
                        </ul>
                        
                        <i className = "bi bi-github"></i><a href={project.gitlink}>  {project.gitlink}</a>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
)}

export default Project