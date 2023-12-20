import React, {useEffect} from "react";
import "./About.css";
import about from "../Images/photo-1.jpg";
import about2 from "../Images/photo-2.jpg";
import about3 from "../Images/photo-3.jpg";
import about4 from "../Images/photo-4.jpg";
import about5 from "../Images/photo-5.jpg";
import poster from "../Images/poster.jpg";
import about6 from "../Images/photo-6-a.jpg";
import about7 from "../Images/photo-7.jpg";
import about8 from "../Images/photo-8.jpg";

const About = () => {
    useEffect(() => {
        alert("This is Ravi");
    }, [])
    return(
        <div className="container">
            <div className="banner">
                <h1 className="banner-text">Ravi</h1> 
            </div>
            <div className="about-content">
                <h2>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
            <div className="image-portion">
                <div className="row">
                    <div className="column left">
                        <img className="left-img" src={about} width={600} height={600}/>
                    </div>
                    <div className="column right">
                        <img className="right-img" src={about2} width={500} height={400}/>
                    </div>
                </div>
            </div>
            <div className="about-content">
                <h2>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h2>
                <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
            </div>
            <div className="youtube-section">
            </div>
            <div className="about-content">
                <h2>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h2>
                <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
            </div>

            <div className="image-portion-2">
                <div className="row">
                    <div className="column left">
                        <img className="left-img" src={about3} style={{display: "block"}} width={550} height={400}/>
                        <img className="left-img second-img" style={{display: "block"}} src={about4} width={550} height={400}/>
                    </div>
                    <div className="column right">
                        <img className="right-img" src={about5} width={600} height={500}/>
                    </div>
                </div>
            </div>
            <div className="about-content">
                <h2>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>

            <div className="poster">
                <img src={poster} width={1200}/>
            </div>

            <div className="about-content">
                <h2>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>

            <div className="about-college">
                <div className="row">
                    <div className="column left">
                        <img className="left-img" src={about6} width={500}/>
                    </div>
                    <div className="column right">
                    <img className="right-img" src={about7} width={600}/>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <h2>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
                <p>If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.</p>
            </div>

            <div className="Job-teaser">
                <div className="row">
                    <div className="column left">
                        <img src={about8} width={640} height={640}/>
                    </div>
                    <div className="column right">
                        <h2 className="centered-text">We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About