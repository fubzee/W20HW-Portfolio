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
                    <div className = "col-md-9">
                        <p> I may not be in position to answer your call, so please, if you do phone leave me a message
                            and I will do my best to get back to as soon as possible.  Or, alternatively, please 
                            send me a text message and I will call back as soon as possible.
                        </p>
                    </div>
                </div>
                <hr></hr>
                <div className ="row"> 
                    <div className = "col-md-3">
                        <p><i className='bi bi-envelope'></i><a href='mailto: fubzee@gmail.com?subject="Development Portfolio"'>   fubzee@gmail.com</a></p>
                    </div>
                    <div className = "col-md-9">
                        <p>Please feel free to send me an email and I will try and respond as soon as possible.</p>
                    </div>
                </div>
                <hr></hr>
                <div className ="row">
                    <div className = "col-md-3">
                        <p><i className='bi bi-linkedin'></i><a href="https://www.linkedin.com/in/sharon-martin-itexp/">  Sharon Martin</a></p>
                    </div>
                    <div className = "col-md-9">
                        <p>Please leave me a linkedin message if you would like to contact me, I will respond as soon as a I can</p>
                    </div>
                </div>
                <hr></hr>
                <div className ="row">
                    <div className = "col-md-3">
                        <p><i className="bi bi-file-arrow-down"></i><a href="./SharonMartinCV.pdf" download> Resume</a></p>
                    </div>
                    <div className = "col-md-9">
                        <p> Please take a copy of my resume.  This provides generalised but more comprehensive details
                            about my career; where I worked, projects and initiatives that I worked on and what was achieved.
                            While it may appear as if I don't list something specific please feel free to reach out let's
                            have a chat as I am always willinging to apply myself to opportunities and challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div className = "container">
            <div className ="row"> 
                <div className = "col-md-1"> 
                    <div class="fa-2x"> 
                        <i className = "bi bi-github"></i>
                    </div>
                </div>
                <div className = "col-md-11"> 
                    <a href="https://github.com/fubzee"> Visit https://github.com/fubzee for a peek at my other development activities 
                    </a>
                </div>
            </div>
            <div className ="row"> 
                <div className = "col-md-1"> 
                    <div class="fa-2x"> 
                        <i className="fa-brands fa-react fa-spin"></i> 
                    </div> 
                </div>
                <div className = "col-md-11"> 
                    <a href="https://github.com/fubzee/W20HW-Portfolio"> Site designed and developed by Sharon Martin 
                    using React and React-Router </a>
                </div>
            </div>
        </div>
    </div>
</div>
)};