import React, { Component } from 'react'

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
                  {/*<img className="img-responsive about-img" src="images/about.jpeg" alt="about-img" />*/}
                  <div className="owl-carousel3">
                    <div className="item">
                      <img className="img-responsive about-img" src="images/about.jpeg" alt="about-img" />
                    </div>
                    <div className="item">
                      <img className="img-responsive about-img" src="images/pastry.jpeg" alt="about-2" />
                    </div>
                  </div>
                  
                </div>

                <div className="col-md-6 col-md-push-1 animate-box">
                  
                  <div className="about-desc">
                    <div class="owl-carousel3">
                        <div class="item">
                            <h2><span>He (Mackenzie)</span><span>Jiang</span></h2>
                        </div>
                        <div class="item">
                            <h2><span>I'm</span><span>A Programmer</span></h2>
                        </div>
                    </div>
                    <div className="desc">
                      <div className="rotate">
                        <h2 className="heading">About</h2>
                      </div>
                      <p>I am Mackenzie, a master's student majoring in software engineering at San Jose State University. Welcome to my site!</p>
                      <p>
                      For my LinkedIn and GitHub links, please download my resume or go to the Contact page.
                      </p>
                      
                      <p><a href="https://github.com/masakichi4" className="btn btn-primary btn-outline">View my resume</a></p>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="row">
                <div className="col-md-4 animate-box">
                  <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
                <div className="col-md-4 animate-box">
                  <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
                <div className="col-md-4 animate-box">
                  <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
              </div>*/}
            </div>
          </div>        
        </div>
    );
  }
}