import React from 'react';
import '../styles/main.css';

export default function FSD() {
  return (
    <div>
      <h3>Full Stack Developer</h3>
      <div className = "col-md-12 align-self-start">
        <p>Coding Bootcamp - Sydney University with Trinity Education Services focused on the MERN stack</p>
          <ul>
              <li>Refactored code to improve site accessibilty</li>
              <li>Designed and developed responsive web-sites using HTML and CSS</li>
              <li>Developed javascript applications for server side functions using 3rd party API calls</li>
              <li>Developed APIs for own data ingestion</li>
              <li>Designed and built application databases using MySQL and MongoDB</li>
              <li>Created and set up GIT repositories and README files</li>
          </ul>
        <p>  Technologies and Concepts covered: </p>
      </div>
      <div className= "container">
          <div className = "row">
              <div className = "col-md-3">
                <img id="mongo" alt="" src="./Mongo.png" width = "150" height = "59"></img>
              </div>
              <div className = "col-md-3">
                <img id="express" alt="" src="./Express.png" width = "110" height = "83"></img>
              </div>
              <div className = "col-md-3">
                <img id="react" alt="" src="./react.png" width = "146" height = "67"></img>
              </div>
              <div className = "col-md-3">
                <img id="node" alt="" src="./node.png" width = "150" height = "93"></img>
              </div>
          </div>
          <div className = "row">
              <div className = "col-md-6 ">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>3rd Party APIs</li>
                  <li>Server Side APIs</li>
                  <li>NodeJS</li>
                  <li>OOP</li>
                  <li>ExpressJS</li>
                </ul>
              </div>
              <div className = "col-md-6 ">
                <ul>
                  <li>SQL- Sequelise </li>
                  <li>ORM</li>
                  <li>MVC</li>
                  <li>NoSQL - MongoDb - Mongoose</li>
                  <li>PWAs</li>
                  <li>React</li>
                  <li>GraphQL</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}