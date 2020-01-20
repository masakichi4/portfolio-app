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
	                <a href="https://github.com/masakichi4/smart-coffee-maker" className="work-img" style={{backgroundImage: 'url(images/coffee-maker.png)'}}>
	                  <div className="display-t">
	                    <div className="work-name">
	                      <h2>Smart Coffee Maker</h2>
	                    </div>
	                  </div>
	                </a>
	                <div className="col-md-4 col-md-offset-4">
	                  <div className="desc">
	                    <p>Smart Coffee Maker is a web application simulating coffee ordering and customization activities from multiple clients. </p>
	                    <p>The web client and server implementations follow the LWM2M Protocol. Technologies used: Node.js, Vue.js, WebSocket, MongoDB, MySQL.</p>
	                    <p className="read"><a href="https://youtu.be/98W-zunXf_0">View demo</a></p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12">
	              <div className="work-entry animate-box">
	                <a href="https://github.com/masakichi4/Smart-Sensor-Dashboard" className="work-img" style={{backgroundImage: 'url(images/sensor-dash.png)'}}>
	                  <div className="display-t">
	                    <div className="work-name">
	                      <h2>Smart Sensor Dashboard</h2>
	                    </div>
	                  </div>
	                </a>
	                <div className="col-md-4 col-md-offset-4">
	                  <div className="desc">
	                    <p>Smart Sensor Dashboard is a web-based dashboard visualizing simulated sensor data retrieved from MongoDB and MySQL. It is a component completed individually in a larger group project.</p>
	                    <p>This dashboard was built with Node.js, Vue.js (Vuetify), MongoDB, MySQL, and deployed to Heroku.</p>
	                    <p className="read"><a href="https://youtu.be/kVOZg3WpK8w">View demo</a></p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12">
	              <div className="work-entry animate-box">
	                <a href="https://github.com/masakichi4/Marketplace" className="work-img" style={{backgroundImage: 'url(images/marketplace.png)'}}>
	                  <div className="display-t">
	                    <div className="work-name">
	                      <h2>All-in-One Marketplace</h2>
	                    </div>
	                  </div>
	                </a>
	                <div className="col-md-4 col-md-offset-4">
	                  <div className="desc">
	                    <p>All-in-One Marketplace is a group project. Using technologies such as PHP, MySQL, HTML, CSS, and Javascript, we created an online marketplace that supports user registration, review/rating submission, mostly/recently viewed tracking on multiple company websites.</p>
	                    <p className="read"><a href="https://youtu.be/JQYCTJ5hy_E">View group demo</a></p>
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