import React from 'react';
import '../styles/main.css';
import BSA from './bsa';
import FSD from './fsd';
import SDM from './sdm';
import Contact from './contacts';
import Me from './me';
import Tail from './footer';
import Tabs from "./Tabs";
import Project from "./project";


 
export default function main() {
  return (
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
                    <nav><a href="#Aboutme" alt="About me">About Me</a></nav>
                </div> 
                <div className = "col-md-3"> 
                    <nav><a href="#WorkExamples" alt="Work Examples">Projects</a></nav>
                </div>
                <div className = "col-md-3"> 
                    <nav><a href="#ContactDetails" alt="Contact Details">Contact Details</a></nav>
                </div>
            </div>
        </div>
        <div className = "container">
            <div className="row">
                <div className = "col-md-4" >
                    <section className="BannerBox">
                   
                    </section>
                </div>
                <div className = "col-md-4" >
                    <section className="BannerBox">
                        <img id="heroimg" alt="" src="./1075701.jpg" width = "560" height = "518"></img>
                    </section>
                </div>
                <div className = "col-md-4" >
                    <section className="BannerBox">
                  
                    </section>
                </div>
            <div className ="row">
                <div className = "col-md-12">
                    <div className="row"> 
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
                    <br></br>
                    <h2 id="Aboutme"> </h2>
                    <div className = "container">
                         <div className = "col-md-12">
                            <div>
                            
                            <Tabs>
                                <div className="label" label="About Me">
                                <div> <Me /></div> 
                                </div>
                                <div className="label" label="Full Stack Developer">
                                <div> <FSD /></div>
                                </div>
                                <div className="label" label="Management">
                                <div> <SDM /></div>
                                </div>
                                <div className="label" label="Analysis">
                                <div> <BSA /></div>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <h2 id="WorkExamples"> Projects</h2>
    <div> <Project /></div>
    <div> <Contact /></div>
    <div> <Tail /></div>
</div>
) 
};
