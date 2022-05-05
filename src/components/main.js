import React from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className = "col-md-3">
                            <div className = "container">
                                <div className="row" id="profile">
                                    <img id="headimg" src="Photo.jpg" alt="Sharon Martin"></img>
                                </div>
                                <div className="row"> 
                                    <p>Hello, my name is </p>  
                                </div>
                                <div className="row">
                                    <h1> Sharon </h1>
                                </div>
                            </div>
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
                        <div className = "col-md-3"> 
                            <Link
                                className="button"
                                to={`/w20hw-portfolio/Contacts`}
                                >Contacts
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className="row">
                        <div className = "col-md-2" >
                            <section className="BannerBox">
                            </section>
                        </div>
                        <div className = "col-md-8" >
                            <section className="BannerBox">
                                <img id="heroimg" alt="" src="./1075701.jpg" width = "600" height = "400"></img>
                            </section>
                        </div>
                        <div className = "col-md-2" >
                            <section className="BannerBox">
                            </section>
                        </div>
                    </div>
                    <br></br>  
                    <br></br>
                    <div className ="row">
                        <div className = "col-md-12">
                            <div className="row"> 
                                <br></br>  
                                <br></br>  
                                <p>I have discovered a love for creating things for the web!</p>  
                                <br></br>    
                                <p> I have completed a Full Stack development bootcamp with the Sydney University and Trinity 
                                    Education Services and have thoroughly enjoying learning all about some of the key technologies 
                                    that enable full stack development and am looking forward to embarking on a career as a 
                                    full stack developer where I can expand on these skills, create awesome applications 
                                    and continue to learn.   
                                </p>  
                                <br></br> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    )
};