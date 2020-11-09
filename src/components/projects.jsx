import React, { Component } from 'react'



export default class Projects extends Component {
  render() {
  	const projects = [
  	{title: 'Spontit Website', repo: '', demo: 'https://www.youtube.com/embed/bg3bYH4clzQ', image: '',
  	  descriptions: <p>This video provides a brief walkthrough and introduces some features of Spontit's website implemented by Mackenzie.<br/><br/>
	  Technologies: React.js, Node.js, Python, DynamoDB.</p>},

	{title: 'Bus Location Tracker', repo: 'https://github.com/masakichi4/bus-app', demo: '', image: require('../images/bus-main.jpg'),
  	  descriptions: <p>- Individually designed and created a bus location tracking application in React with transportation data from 511.org API, 
  	  showing real time bus locations on Google Maps and speed statistics with Victory charts.</p>},

  	{title: 'Url Shortener', repo: 'https://github.com/masakichi4/short-url', demo: '', image: '',
  	  descriptions: <p>- Individually designed and created an app in Node.JS that converts an inputted long url to a shorter url.</p>},

  	{title: 'Smart Sensor Dashboard', repo: 'https://github.com/masakichi4/Smart-Sensor-Dashboard', demo: 'https://www.youtube.com/embed/kVOZg3WpK8w', image: '',
  	  descriptions: <p>- Led a team of 4 to create a Vue dashboard to display sensor data stored in MongoDB.</p>},

  	{title: 'Smart Coffee Maker', repo: 'https://github.com/masakichi4/smart-coffee-maker', demo: 'https://www.youtube.com/embed/98W-zunXf_0', image: '',
  	  descriptions: <p>Smart Coffee Maker is a web application simulating coffee ordering and customization activities from multiple clients. <br/><br/>
	                    The web client and server implementations follow the LWM2M Protocol. Technologies: Node.js, Vue.js, WebSocket, MongoDB, MySQL.</p>},

  	{title: 'All-in-One Marketplace', repo: 'https://github.com/masakichi4/Marketplace', demo: "https://www.youtube.com/embed/JQYCTJ5hy_E", image: '',
  	  descriptions: <p>All-in-One Marketplace is a group project. We created an online marketplace that supports user registration, review/rating submission, 
  	  mostly/recently viewed tracking on multiple company websites.<br/><br/>Technologies: PHP, MySQL, HTML, CSS, and Javascript.</p>},
  	]

    return (
      <div>
	      <div id="colorlib-work">
	        <div className="container" id="projects">
	          <div className="row text-center">
	            <h2 className="bold">Projects</h2>
	          </div>
	          <div className="row">
	            <div className="col-md-12 col-md-offset-0 text-center  intro-heading">
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
	          
	          {projects.length > 0 && projects.map(project => {
	          	return (
	              <div className="row">
		            <div className="col-md-12">
		              <div className="work-entry " id="spontit-demo">
		                <div className="col-md-6 col-md-offset-3 ">
		                  <div className="work-name">
		                      <h2>{project.title}</h2>
		                  </div>
		                  <div className="desc">
		                    {project.repo && <p><a href={project.repo} target="_blank">Repo</a></p>}
		                    {project.descriptions}
		                    {project.demo && <p className="read"><a href={project.demo} target="_blank">View demo on Youtube</a></p>}
		                  </div>
		                </div>
		                {project.demo && <iframe src={project.demo}
					        frameBorder='0'
					        allow="accelerometer; autoplay; encrypted-media; picture-in-picture" 
					        allowFullScreen
					        title='video'
					        className="work-img"
						/>}
						{project.image && <img className="img-responsive work-img" src={project.image} alt="project-img" />}
		              </div>
		            </div>
		          </div>
		        )
	          })}
	          <div style={{
	        	display: 'flex',
		    	flexDirection: 'row',
		    	justifyContent: 'space-evenly'}}>
	            <p><a href='#top' className="btn btn-primary btn-outline">Back to top</a></p>
	          </div>
	        </div>
	      </div>
      </div>
    )
  }
}