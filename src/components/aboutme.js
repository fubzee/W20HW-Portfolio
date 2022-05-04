import React from 'react';
import '../styles/main.css';
import BSA from './bsa';
import FSD from './fsd';
import SDM from './sdm';
import Me from './me';
import Tabs from "./Tabs";
import { Link } from 'react-router-dom';

export default function About() {
    return ( 
<div>
    <div className="container">
        <div className="row">
            <div className = "col-md-3">  
                <img id="heroimg" alt="" src="./small1075701.jpg" width = "300" height = "183"></img>
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
                    to={`/Projects`}
                    >Projects
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
    <br></br>
    <h2 id="About"> </h2>
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
)}