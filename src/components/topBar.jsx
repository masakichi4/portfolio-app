import React, { Component } from 'react'

export default class TopBar extends Component {
  render() {
    return (
        <div 
        id="top"
        style={{
        	padding: '1vh',
        	display: 'flex',
	    	flexDirection: 'row',
	    	justifyContent: 'center'}}>
	          <h3><a href='#about' className="btn-outline btn btn-primary" style={{margin: '1vw'}}>About </a></h3>
	          <h3><a href='#experience' className="btn-outline btn btn-primary" style={{margin: '1vw'}}>Experience </a></h3>
	          <h3><a href='#skills' className="btn-outline btn btn-primary" style={{margin: '1vw'}}>Skills </a></h3>
	          <h3><a href='#projects' className="btn-outline btn btn-primary" style={{margin: '1vw'}}>Projects </a></h3>
	          <h3><a href='#contact' className="btn-outline btn btn-primary" style={{margin: '1vw'}}>Contact </a></h3>
	      {/*<div className="row row-padded-bottom">
	        <div className="col-md-5 animate-box">
	          <div className="owl-carousel3">
	            <div className="item">
	              <img className="img-responsive about-img" src="images/about.jpeg" alt="about-img" />
	            </div>
	            <div className="item">
	              <img className="img-responsive about-img" src="images/pastry.jpeg" alt="about-2" />
	            </div>
	          </div>
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
	            </div>
	            <div class="item">
	                <h2><span>He (Mackenzie)</span><span>Jiang</span></h2>
	            </div>
	            <div className="desc">
	              <div className="rotate">
	                <h2 className="heading">About</h2>
	              </div>
	              <p>Welcome to my site!<br/> I am Mackenzie, a software engineering master's student at San Jose State University.</p>
	              <p>I am graduating in December 2020, and looking for a full-time software development position starting 2021.</p>
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
	      </div>*/}
	    </div>
    )
  }
}