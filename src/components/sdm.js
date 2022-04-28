import React from 'react';
import '../styles/main.css';

export default function SDM() {
  return (
  
    <div> 
        <div className= "container">
            <div className = "row">
                <div className = "col-md-6 align-self-start">
                    <h3> Solution Delivery Manager</h3>
                        <p>    Management of the Solution Delivery Team comprising: </p>
                    <ul>
                        <li>Systems Analysis and Design,</li>
                        <li>Software/Application 
                            Development which included a Data Warehouse and Enterprise Application Systems Team,</li>
                        <li>IT Projects function. </li>
                    </ul>  
                    <p> Alignment of IT resources to meet the Business Programme, 
                         CAB processes, 'BAU' activities and Application/Production Support.
                    </p>
                    <ul>
                        <li>Resource planning/activity project scheduling </li>
                        <li>Resource/Team Management (HR) Functions - recruiting, training, performance management</li>
                        <li>Ongoing Process Reviews and Process Improvement</li>
                        <li>Production and Application Support</li>
                    </ul>
                </div>   
                <div className = "col-md-6 align-self-start">
                    <h3> Senior Systems Manager</h3>
                        <p>Management of the business change function and a team of BSAs (Business Systems Analysts)</p>
                    <ul>
                        <li>Resource planning/activity project scheduling </li>
                        <li>IT and Vendor change management in terms of:</li>
                            <ul>
                                <li>prioritizing development requirements</li> 
                                <li>implementation approvals and business readiness</li>
                            </ul>
                            <li>Resource/Team Management (HR) Functions - recruiting, mentoring and training, performance management</li>
                        <li>Business System/Application Support </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}