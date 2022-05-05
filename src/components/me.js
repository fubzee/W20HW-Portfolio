import React from 'react';
import '../styles/main.css';

export default function Me() {
    return ( 
    <div>
        <div className = "container">
        <br></br>
        <br></br>
            <div className="row">
                <h3 >About Me</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            <div className="row">
                <p>
                Welcome to my development portfolio!  I have always enjoyed finding creative ways to 
                solve problems and working in IT provided a platform where I can do just that!
                I started my career out as a developer, or programmer as it was known back then, and have had 
                a satisfying career spanning a number of roles; systems analyst, team leader, solution designer, 
                manager where I was managing teams of software engineers and technical business analysts. I have 
                gained a lot of knowledge by being part of a myriad of exciting projects; conversions, 
                integrations, B2B solutions, B2C consumer spanning mainframe to client-server applications
                </p>
                <p>     
                Throughout the course of my career I have never stopped learning and if I don't know something 
                I will try and get my head around it until I feel comfortable and confident with whatever 
                chellenge comes my way.  I believe I can make a positive contribution with this 
                experience and the knowledge that I have gained. 
                </p>
                <p>
                If you are interested in specifics about some of the roles and what I did,  then please scroll through
                the tabs to get a summary of my career, skills and experience or feel free to download my resume - 
                the link is in the contact details section.  
                </p> 
            </div>
            <hr></hr>
                <p className = "cert">
                Certificate: Full Stack Development - Sydney University
                </p>
                <p className = "cert">
                Degree: BCom Information Systems - UNISA
                </p>
        </div>
    </div>
)};