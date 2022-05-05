import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function Contacts() {
    return (
    <div>
        <div className="jumbotron">
        <div className="container">
            <div className="row">
                <div className = "col-md-3"> 
                    <img id="heroimg" alt="" src="./small1075701.jpg" width = "300" height = "183"></img>
                </div>
                <div className = "col-md-3"> 
                    <Link
                        className="button"
                        to={`/w20hw-portfolio/`}
                        >Home
                    </Link>
                </div>
                <div className = "col-md-3">    
                    <Link
                    className="button"
                        to={`/w20hw-portfolio/aboutme`} 
                        >About Me
                    </Link>
                </div> 
                <div className = "col-md-3"> 
                    <Link
                        className="button"
                        to={`/w20hw-portfolio/Projects`}
                        >Projects
                    </Link>
                </div>
            </div>
        </div>
        <div>
            <h2 id="Contacts"> Contact Details</h2>
            <br></br>
            <br></br>
            <div className="container">
            <div className ="row"> 
                <div className = "col-md-3" id="ContactDetails">
                    <p className="credits"><i className='bi bi-phone'></i> +61-412692585</p>
                </div>
                <div className = "col-md-3">
                    <p><i className='bi bi-envelope'></i><a href='mailto: fubzee@gmail.com?subject="Development Portfolio"'>   fubzee@gmail.com</a></p>
                </div>
                <div className = "col-md-3">
                    <p><i className='bi bi-linkedin'></i><a href="https://www.linkedin.com/in/sharon-martin-itexp/">  Sharon Martin</a></p>
                </div>
                <div className = "col-md-3">
                    
                    <p><i className="bi bi-file-arrow-down"></i><a href="SharinMartinCV.pdf" download> Resume</a></p>
                </div>
            </div>
            </div>
        </div>
        <br></br>
        <div className = "container">
            <div className ="row"> 
                <div className = "col-md-6"> 
                    <i className = "bi bi-github"></i>
                    <a href="https://github.com/fubzee"> Visit https://github.com/fubzee for a peek at my other development activities 
                </a></div>

                <div className = "col-md-6">     
                    <i className="fa-brands fa-react"></i> 
                    <a href="https://github.com/fubzee/W20HW-Portfolio"> Site designed and developed by Sharon Martin using React 
                </a></div>
            </div>
        </div>
    </div>
    </div>
)};