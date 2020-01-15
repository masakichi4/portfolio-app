import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import About from './about'
import Projects from './projects'
import Gallery from './gallery'
import Experience from './experience'
import Contact from './contact'

export default class Sidebar extends Component {
  render() {
    return (
    	<Router>
    	  <div>
    	    <header>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="colorlib-navbar-brand">
                                <Link class="colorlib-logo" to="/about"><span>He</span><span>Jiang</span></Link>
                            </div>
                            <a href="#navbar" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                        </div>
                    </div>
                </div>
            </header>
	    	<nav id="colorlib-main-nav" role="navigation">
	    	  {/* eslint-disable-next-line*/}
	          <a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
		        <div className="js-fullheight colorlib-table">
		          <div className="colorlib-table-cell js-fullheight">
		            <div className="row">
		              <div className="col-md-12">
		                <div className="form-group">
		                  <input type="text" className="form-control" id="search" placeholder="Enter any key to search..." />
		                  <button type="submit" className="btn btn-primary"><i className="icon-search3" /></button>
		                </div>
		              </div>
		            </div>
		            <div className="row">
		              <div className="col-md-12 sidebar-options">
		                <ul>
		                  <li><NavLink activeStyle={{color:'#CA82F8'}} to="/about">About</NavLink></li>
		                  <li><NavLink activeStyle={{color:'#CA82F8'}} to="/experience">Experience</NavLink></li>
		                  <li><NavLink activeStyle={{color:'#CA82F8'}} to="/projects">Projects</NavLink></li>
		                  <li><NavLink activeStyle={{color:'#CA82F8'}} to="/gallery">Gallery</NavLink></li>
		                  <li><NavLink activeStyle={{color:'#CA82F8'}} to="/contact">Contact</NavLink></li>
		                </ul>
		              </div>
		            </div>
		            
		          </div>
		        </div>
	        </nav>
          </div>
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
	          <Route path="/gallery">
	            <Gallery />
	          </Route>
	          <Route path="/contact">
	            <Contact />
	          </Route>
	          <Route path="/">
	            <About />
	          </Route>
	       </Switch>
        </Router>
    )
  }
}