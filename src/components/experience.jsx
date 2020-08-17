import React, { Component } from 'react'
const plantImg = require('../images/plants.jpeg')
const teaImg = require('../images/tea.jpeg')


export default class Experience extends Component {
  render() {


    return (
      <div>
	      <div id="colorlib-services">
	        <div className="container">
	          <div className="row text-center">
	            <h2 className="bold">Experience</h2>
	          </div>
	          <div className="row">
	            <div className="col-md-12">
	              <div className="services-flex">
	                <div className="one-third">
	                  <div className="row">
	                    <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
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
	                   	  <div className="services animate-box">
	                        <h3>Spontit <span style={{padding:'20px'}}> 2020.2~2020.8</span></h3>
	                        <p>Software Development Internship</p>
	                        <p>- Built the company’s website from scratch in React and Express. <br/>- Implemented backend API functions in Python. Worked with Docker, AWS EB, DynamoDB.<br/>
	                        - Implemented a Wordpress plugin, and implemented IFTTT integration.</p>
	                      </div>
	                      <div className="services animate-box">
	                        <h3>Togg <span style={{padding:'20px'}}> 2018.12~2019.1</span></h3>
	                        <p>Software Development Internship</p>
	                        <p>- Created a full-stack web application for tracking health device status. <br/>- Used tools including Node.js, Vue.js, Express, MySQL, Google PubSub, Google Cloud Platform.</p>
	                      </div>
	                      <div className="services animate-box">
	                        <h3>B.S University of California, Berkeley	<span style={{padding:'20px'}}>2014.8~2018.5</span></h3>
	                        <p>Majors: Cognitive Science (concentration in Computer Science), Japanese</p>
	                        <p>Courses: Structure and Interpretation of Computer Programs, Data Structures, User Interface Design and Development, Introduction to Database Systems, Theory and Practice of Japanese Translation.</p>
	                      </div>
	                      <div className="services animate-box">
	                        <h3>M.S San Jose State University<span style={{padding:'20px'}}>2018.8~2020.12</span></h3>
	                        <p>Major: Software Engineering</p>
	                        <p>Courses: Operating Systems, Software Engineering Processes, Data Structure C++, Enterprise Software Platforms, Cloud Technologies, Virtualization Technologies, Enterprise Distributed Systems.</p>
	                      </div>
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
	        <div className="container">
	          <div className="row text-center">
	            <h2 className="bold">Skills</h2>
	          </div>
	          <div className="row">
	            <div className="col-md-12">
	              <div className="services-flex">
	                <div className="one-third">
	                  <div className="row">
	                    <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
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
	                      <div className="services animate-box">
	                        <h3>1 - Programming</h3>
	                        <ul>
	                          <li>Java</li>
	                          <li>Python</li>
	                          <li>Node.JS</li>
	                          <li>PHP</li>
	                        </ul>
	                      </div>
	                      <div className="services animate-box">
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
	                      <div className="services animate-box">
	                        <h3>3 - Database</h3>
	                        <ul>
	                          <li>SQL</li>
	                          <li>MySQL</li>
	                          <li>MongoDB</li>
	                          <li>DynamoDB</li>
	                        </ul>
	                      </div>
	                      <div className="services animate-box">
	                        <h3>4 - Languages</h3>
	                        <ul>
	                          <li>Chinese</li>
	                          <li>Chinese Xiang dialect</li>
	                          <li>English</li>
	                          <li>Japanese - JLPT N1 certified</li>
	                        </ul>
	                      </div>
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