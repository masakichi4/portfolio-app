import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div id="colorlib-contact">
          <div className="container">
            <div className="row text-center">
                <h2 className="bold">Contact</h2>
            </div>

            <div className="row">
              <div className="col-md-6 col-pb-sm">
                <div className="row">
                  <div className="col-md-10">
                    <h2>Let's Talk</h2>
                    <p>Looking for interships and/or part-time opportunities.</p>
                    <p><a href="mailto:mackenziejiang@gmail.com">mackenziejiang@gmail.com</a></p>
                    <p className="colorlib-social-icons">
                      <a style={{padding:'10px'}} href="https://www.linkedin.com/in/hejiang4/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" /></a>
                      <a style={{padding:'10px'}} href="https://github.com/masakichi4" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a>
                      <a style={{padding:'10px'}} href="https://www.youtube.com/channel/UC1P4878OVbvbfa4cZpG-EhQ/" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /></a>
                    </p>
                  </div>
                </div>
              </div>
              {/*<div className="col-md-4 col-pb-sm">
                <h2>Latest Blog</h2>
                <div className="f-entry">
                  <a href="#" className="featured-img" style={{backgroundImage: 'url(images/img-1.jpg)'}} />
                  <div className="desc">
                    <span>February 15, 2018</span>
                    <h3><a href="#">Art Gallery in Japan</a></h3>
                  </div>
                </div>
                <div className="f-entry">
                  <a href="#" className="featured-img" style={{backgroundImage: 'url(images/img-2.jpg)'}} />
                  <div className="desc">
                    <span>February 9, 2018</span>
                    <h3><a href="#">A Japanese Constellation</a></h3>
                  </div>
                </div>
                <div className="f-entry">
                  <a href="#" className="featured-img" style={{backgroundImage: 'url(images/img-3.jpg)'}} />
                  <div className="desc">
                    <span>February 15, 2018</span>
                    <h3><a href="#">Road Trip</a></h3>
                  </div>
                </div>
              </div>*/}
              <div className="col-md-6 col-pb-sm">
                <h2>Newsletter</h2>
                <p>Please enter your email below to subscribe.</p>
                <div className="subscribe text-center">
                  <div className="form-group">
                    <input type="text" className="form-control text-center" placeholder="Enter Email address" />
                    <br /><input type="submit" defaultValue="Subscribe" className="btn btn-primary btn-custom" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  © {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart4" aria-hidden="true" /> by <a href="https://colorlib.com">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}