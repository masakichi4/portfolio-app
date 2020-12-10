import React, { Component } from 'react';
import './topBar.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { withTranslation, Trans } from "react-i18next";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'


class TopBar extends Component {
  state = {
    value: this.props.i18n.language
  };

  handleChange = event => {
  	event.preventDefault();
	let newlang = event.target.value;
	this.setState(prevState => ({ value: newlang }));
	this.props.i18n.changeLanguage(newlang);
  };

  render() {
  	const buttonStyles = {
  		margin: '1vw 1vw 0.1vw'
  	}
  	const {value} = this.state;
  	const { t, i18n } = this.props;
  	console.log(i18n)

    return (
	    <Router>
	    	<Grid
		    container
		    direction="row"
		    justify="center"
	        id="top"
	        style={{padding: '1vh 1vh 0vh'}}>
		    	<FormControl component="fieldset" style={buttonStyles}>
			      <RadioGroup row aria-label="language" name="language" value={value} onChange={this.handleChange}>
			      <FormControlLabel value="en" control={<Radio color="primary" style={{marginBottom: '0em'}} />} label="English" />
			        <FormControlLabel value="zh-CN" control={<Radio color="primary" />} label="中文" />
			      </RadioGroup>

			    </FormControl>
		    	
		    	  <h3><NavLink to='/' className="btn-outline btn btn-primary" style={buttonStyles} ><Trans>{t("home")}</Trans> </NavLink></h3>
		          <h3><NavLink to='/about' className="btn-outline btn btn-primary" style={buttonStyles}><Trans>{t("about")}</Trans> </NavLink></h3>
		          <h3><NavLink to='/experience' className="btn-outline btn btn-primary" style={buttonStyles}><Trans>{t("experience")}</Trans> </NavLink></h3>
		          <h3><NavLink to='/projects' className="btn-outline btn btn-primary" style={buttonStyles}><Trans>{t("projects")}</Trans> </NavLink></h3>
		          <h3><NavLink to='/contact' className="btn-outline btn btn-primary" style={buttonStyles}><Trans>{t("contact")}</Trans> </NavLink></h3>
		    </Grid>
		    <Switch>
	          <Route path="/about">
	            <About />
	          </Route>
	          <Route path="/experience">
	            <Experience />
	          </Route>
	          <Route path="/projects">
	            <Projects />
	          </Route>
	          <Route path="/contact">
	            <Contact />
	          </Route>
	          <Route path="/">
	            <About />
	            <Experience />
	            <Projects />
	            <Contact />
	          </Route>
	       </Switch>
	    </Router>
	      /*<div className="row row-padded-bottom">
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
	      </div>*/
	    
    )
  }
}
export default withTranslation("translations")(TopBar);
