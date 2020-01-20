import React, { Component } from 'react'
import profileImg from '../images/about.jpeg'

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
                      <p>I am Mackenzie, a master's student majoring in software engineering at San Jose State University. Welcome to my site!</p>
                      <p className="colorlib-social-icons">
                        <a style={{padding:'10px'}} href="https://www.linkedin.com/in/hejiang4/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" /></a>
                        <a style={{padding:'10px'}} href="https://github.com/masakichi4" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a>
                        <a style={{padding:'10px'}} href="https://www.youtube.com/channel/UC1P4878OVbvbfa4cZpG-EhQ/" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /></a>
                      </p>
                      
                      <p><a href="https://github.com/masakichi4" className="btn btn-primary btn-outline">View my resume</a></p>
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