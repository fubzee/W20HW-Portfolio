import '../styles/main.css';
import projectData from './projectdata';
import { Link } from 'react-router-dom';
export default function Projects() {
    return (
    <div>
       <div className="container">
        <div className="row">
            <div className = "col-md-3"> 
                <img id="headimg" alt="" src="./AvatarMe.png" width = "300" height = "183"></img>
            </div>
            <div className = "col-md-3">    
                <Link
                className="button"
                    to={`/`} 
                    >Home
                </Link>
            </div> 
            <div className = "col-md-3"> 
                <Link
                    className="button"
                    to={`/aboutme`} 
                    >About Me
                </Link>
            </div>
            <div className = "col-md-3"> 
                <Link
                    className="button"
                    to={`/Contacts`}
                    >Contact Details
                </Link>
            </div>
        </div>
    </div>

    <h2 id="Projects"> Projects</h2>
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
    )
}

