import React from 'react';
import '../styles/main.css';

export default function Tail() {
  return (

    <div className = "container">
        <div className ="row"> 
            <div className = "col-md-2"></div>
            <div className = "col-md-8"> <i className = "bi bi-github"></i><a href="https://github.com/fubzee"> Visit https://github.com/fubzee for a complete list of projects and other development activities </a></div>
            <div className = "col-md-2"></div>  
        </div>
        <div className ="row"> 
            <div className = "col-md-4"><p className="credits"><a href="https://www.freepik.com/vectors/abstract">Abstract vector created by zaie - www.freepik.com</a></p></div>
            <div className = "col-md-4"></div>
            <div className = "col-md-4"><p className="credits"> Designed and developed by Sharon Martin </p></div>
        </div>
        
    </div>

)};

