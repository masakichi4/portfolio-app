import React, { Component } from 'react'



export default class Projects extends Component {
  render() {
    return (
      <div>
	      <div id="colorlib-work">
	        <div className="container">
	          <div className="row text-center">
	            <h2 className="bold">Projects</h2>
	          </div>
	          <div className="row">
	            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
	              <span>Portfolio</span>
	              <h2>Past Projects</h2>
	            </div>
	          </div>
	          <div className="row">
	            <div className="col-md-12">
	              <div className="rotate">
	                <h2 className="heading">Portfolio</h2>
	              </div>
	            </div>
	          </div>
	          <div className="row">
	            <div className="col-md-12">
	              <div className="work-entry animate-box">
	                <iframe src='https://www.youtube.com/embed/98W-zunXf_0'
				        frameBorder='0'
				        allow="accelerometer; autoplay; encrypted-media; picture-in-picture" 
				        allowFullScreen
				        title='video'
				        className="work-img"
					/>
	                <div className="col-md-4 col-md-offset-4">
	                  <div className="work-name">
	                      <h2>Smart Coffee Maker</h2>
	                  </div>
	                  <div className="desc">
	                    <p>Smart Coffee Maker is a web application simulating coffee ordering and customization activities from multiple clients. </p>
	                    <p>The web client and server implementations follow the LWM2M Protocol. Technologies used: Node.js, Vue.js, WebSocket, MongoDB, MySQL.</p>
	                    <p className="read"><a href="https://github.com/masakichi4/smart-coffee-maker">View code on GitHub</a></p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12">
	              <div className="work-entry animate-box">
	                <iframe src='https://www.youtube.com/embed/kVOZg3WpK8w'
				        frameBorder='0'
				        allow="accelerometer; autoplay; encrypted-media; picture-in-picture" 
				        allowFullScreen
				        title='video'
				        className="work-img"
					/>
	                <div className="col-md-4 col-md-offset-4">
	                  <div className="work-name">
	                      <h2>Smart Sensor Dashboard</h2>
	                  </div>
	                  <div className="desc">
	                    <p>Smart Sensor Dashboard is a web-based dashboard visualizing simulated sensor data retrieved from MongoDB and MySQL. It is a component completed individually for a larger group project.</p>
	                    <p>This dashboard was built with Node.js, Vue.js (Vuetify), MongoDB, MySQL, and deployed to Heroku.</p>
	                    <p className="read"><a href="https://github.com/masakichi4/Smart-Sensor-Dashboard">View code on GitHub</a></p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12">
	              <div className="work-entry animate-box">
					<iframe className="work-img" 
					src="https://www.youtube.com/embed/JQYCTJ5hy_E" 
					frameborder="0" 
					allow="accelerometer; autoplay; encrypted-media; picture-in-picture" 
					title='video'
					allowfullscreen />
	                <div className="col-md-4 col-md-offset-4">
	                  <div className="work-name">
	                      <h2>All-in-One Marketplace</h2>
	                  </div>
	                  <div className="desc">
	                    <p>All-in-One Marketplace is a group project. Using technologies such as PHP, MySQL, HTML, CSS, and Javascript, we created an online marketplace that supports user registration, review/rating submission, mostly/recently viewed tracking on multiple company websites.</p>
	                    <p className="read"><a href="https://github.com/masakichi4/Marketplace">View code on GitHub</a></p>
	                  </div>
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