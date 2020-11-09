import React, { Component } from 'react'
const plantImg = require('../images/plants.jpeg')
const teaImg = require('../images/tea.jpeg')


export default class Experience extends Component {
  render() {


    return (
      <div>
	      <div id="colorlib-services">
	        <div className="container" id="experience">
	          <div className="row text-center">
	            <h2 className="bold">Experience</h2>
	          </div>
	          <div className="row">
	            <div className="col-md-12">
	              <div className="services-flex">
	                <div className="one-third">
	                  <div className="row">
	                    <div className="col-md-12 col-md-offset-0  intro-heading">
	                      <span>Experience</span>
	                      <h2>Education & Work</h2>
	                    </div>
	                  </div>
	                  <div className="row">
	                    <div className="col-md-12">
	                      <div className="rotate">
	                        <h2 className="heading">Experience</h2>
	                      </div>
	                    </div>
	                    <div className="col-md-12">
	                   	  <div className="services ">
	                        <h3>Spontit <span style={{padding:'20px'}}> 2020.2~2020.8</span> &nbsp;<a href='#spontit-demo'>Demo</a></h3>
	                        <p>Software Development Internship</p>
	                        <p>- Built the startup’s website from scratch in React with reusable components and dynamic components, boosting the number of daily active users by 3x. <br/>
	                        - Rendered the app with an Express server, decreased load time by 50% through code splitting.<br/>
	                        - Worked in pair to implement and debug API functions in Python to maneuver data in DynamoDB.<br/>
	                        - Built IFTTT integration for front & back-end, achieved ~1000 applet runs in a month of publishing.</p>
	                      </div>
	                      <div className="services ">
	                        <h3>Togg <span style={{padding:'20px'}}> 2018.12~2019.1</span></h3>
	                        <p>Software Development Internship</p>
	                        <p>- Individually implemented a web app in Vue for tracking health device status for internal use. <br/>
	                        - Tracked 200 devices with Google PubSub and reflected real-time statuses on a dashboard; the company 
	                        could catch & locate offline devices within less than an hour, which would take days to be noticed before.</p>
	                      </div>
	                      <div className="services ">
	                        <h3>B.S University of California, Berkeley	<span style={{padding:'20px'}}>2014.8~2018.5</span></h3>
	                        <p>Majors: Cognitive Science (concentration in Computer Science), Japanese Language and Literature</p>
	                      </div>
	                      <div className="services ">
	                        <h3>M.S San Jose State University<span style={{padding:'20px'}}>2018.8~2020.12</span></h3>
	                        <p>Major: Software Engineering</p>
	                      </div>
	                      <p><a href='#top' className="btn btn-primary btn-outline">Back to top</a></p>
	                    </div>
	                  </div>
	                </div>
	                <div className="one-forth services-img" style={{backgroundImage: `url(${teaImg})`}}>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div id="colorlib-services">
	        <div className="container" id="skills">
	          <div className="row text-center">
	            <h2 className="bold">Skills</h2>
	          </div>
	          <div className="row">
	            <div className="col-md-12">
	              <div className="services-flex">
	                <div className="one-third">
	                  <div className="row">
	                    <div className="col-md-12 col-md-offset-0  intro-heading">
	                      <span>Skills</span>
	                      <h2>My Skills</h2>
	                    </div>
	                  </div>
	                  <div className="row">
	                    <div className="col-md-12">
	                      <div className="rotate">
	                        <h2 className="heading">Skills</h2>
	                      </div>
	                    </div>
	                    <div className="col-md-6">
	                      <div className="services ">
	                        <h3>1 - Programming</h3>
	                        <ul>
	                          <li>Java</li>
	                          <li>Python</li>
	                          <li>Node.JS</li>
	                          <li>PHP</li>
	                        </ul>
	                      </div>
	                      <div className="services ">
	                        <h3>2 - Web Development</h3>
	                        <ul>
	                          <li>React.JS</li>
	                          <li>Vue.JS</li>
	                          <li>HTML / CSS</li>	                          
	                          <li>Javascript</li>
	                        </ul>
	                      </div>
	                    </div>
	                    <div className="col-md-6">
	                      <div className="services ">
	                        <h3>3 - Database</h3>
	                        <ul>
	                          <li>SQL</li>
	                          <li>MySQL</li>
	                          <li>MongoDB</li>
	                          <li>DynamoDB</li>
	                        </ul>
	                      </div>
	                      <div className="services ">
	                        <h3>4 - Languages</h3>
	                        <ul>
	                          <li>Chinese</li>
	                          <li>English</li>
	                          <li>Japanese - JLPT N1 certified</li>
	                          <li>Chinese Xiang dialect</li>
	                        </ul>
	                      </div>
	                      <p><a href='#top' className="btn btn-primary btn-outline">Back to top</a></p>
	                    </div>
	                  </div>
	                </div>
	                <div className="one-forth services-img" style={{backgroundImage: `url(${plantImg})`}}>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	  </div>
    )
  }
}