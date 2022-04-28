import React from 'react';
import '../styles/main.css';

export default function Contact() {
    return (
        
        <div className = "container">
        <br></br>
        <br></br>
        <h2 >Contact Details</h2>
        <br></br>
        <br></br>
        <div className ="row"> 
            <div className = "col-md-3" id="ContactDetails">
               {/* <p span ><img id="phone" src="/images/phone.jpg" alt="phone"></img>  +61-412692585</p>               */}
                <p className="credits"><i className='bi bi-phone'></i> +61-412692585</p>
            </div>
            <div className = "col-md-3">
                {/* <a img id="email" src="/images/email.jpg" href='mailto: fubzee@gmail.com?subject="Development Portfolio"'>   fubzee@gmail.com</a>     */}
                <p><i className='bi bi-envelope'></i><a href='mailto: fubzee@gmail.com?subject="Development Portfolio"'>   fubzee@gmail.com</a></p>
            </div>
            <div className = "col-md-3">
                {/* <a href="https://www.linkedin.com/in/sharon-martin-itexp/"><img id="linkedin" src="/images/linkedin.jpg" alt="LinkedIn"></img>  Sharon Martin</a> */}
                <p><i className='bi bi-linkedin'></i><a href="https://www.linkedin.com/in/sharon-martin-itexp/">  Sharon Martin</a></p>
            </div>
            <div className = "col-md-3">
                {/* <a href="SM-FSD.pdf" download><img src="/images/resume.png" alt="Resume"></img> Resume</a> */}
                <p><i className="bi bi-file-arrow-down"></i><a href="SM-FSD.pdf" download> Resume</a></p>
            </div>
        </div>
        <br></br>
    </div>
    )
};