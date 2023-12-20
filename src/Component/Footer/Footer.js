import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <h2 style={{paddingBottom: 64, textAlign: "left", fontSize: 30}}>Ravi</h2>
            <div className="row">
                <div className="column one">
                    <div className="footer-urls">
                        <ul>
                            <li>Register Live or Push</li>
                            <li>About Ravi</li>
                            <li>Jobs</li> 
                        </ul>
                    </div>
                </div>
                <div className="column two">
                <div className="footer-urls">
                    <h3>Education</h3>
                        <ul>
                            <li>Register Live or Push</li>
                            <li>About Ravi</li>
                            <li>Jobs</li> 
                        </ul>
                    </div>
                </div>
                <div className="column three">
                    <div className="signUp">
                        <h3>Sign up to our newsletter</h3>
                        <p style={{fontSize: 18}}>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                    </div>
                </div>
            </div>

            <div className="copyrights">
                <p>All Rights Reserved   |  © Copyright 2023 – Ravi  </p>
            </div>
        </div>
    )
}

export default Footer