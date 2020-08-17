import React, { Component } from 'react'
import {
  Link,
} from "react-router-dom";

export default class About extends Component {
  render() {
    return (
        <div>              
          <div id="colorlib-about">
            <div className="container">
              <div className="row text-center">
                <h2 className="bold">About</h2>
              </div>
              <div className="row row-padded-bottom">
                <div className="col-md-5 animate-box">
                  {/*<div className="owl-carousel3">
                    <div className="item">
                      <img className="img-responsive about-img" src="images/about.jpeg" alt="about-img" />
                    </div>
                    <div className="item">
                      <img className="img-responsive about-img" src="images/pastry.jpeg" alt="about-2" />
                    </div>
                  </div>*/}
                  <div className="item">
                    <img className="img-responsive about-img" src={require('../images/about.jpeg')} alt="profile-img" />
                  </div>
                </div>

                <div className="col-md-6 col-md-push-1 animate-box">
                  
                  <div className="about-desc">
                    {/*-<div class="owl-carousel3">
                        <div class="item">
                            <h2><span>He (Mackenzie)</span><span>Jiang</span></h2>
                        </div>
                        <div class="item">
                            <h2><span>I'm</span><span>A Programmer</span></h2>
                        </div>
                    </div>*/}
                    <div class="item">
                        <h2><span>He (Mackenzie)</span><span>Jiang</span></h2>
                    </div>
                    <div className="desc">
                      <div className="rotate">
                        <h2 className="heading">About</h2>
                      </div>
                      <p>Welcome to my site!<br/> I am Mackenzie, a software engineering master's student at San Jose State University.</p>
                      <p>I am graduating in December 2020, and looking for a full-time software development position starting after graduation.</p>
                      <p>Please feel free to <a href="mailto:mackenziejiang@gmail.com">email</a> me if you have any opportunities for me! (or pictures of cute puppies) Thank you!</p>
                      <p className="colorlib-social-icons">
                        <a style={{padding:'10px'}} href="https://www.linkedin.com/in/hejiang4/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" /></a>
                        <a style={{padding:'10px'}} href="https://github.com/masakichi4" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a>
                        <a style={{padding:'10px'}} href="https://www.youtube.com/channel/UC1P4878OVbvbfa4cZpG-EhQ/" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /></a>
                      </p>
                      
                      <p><Link to={process.env.PUBLIC_URL+"/Resume_HeJiang.pdf"} className="btn btn-primary btn-outline" target="_blank">View Resume</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </div>
    );
  }
}