import React, { Component } from 'react'
import {
  Link,
} from "react-router-dom";
import { withTranslation, Trans } from "react-i18next";


class About extends Component {

  
  render() {
    const { t } = this.props;
    return (
        <div>              
          <div id="colorlib-about">
            <div className="container" id="about">
              <div className="row text-center">
                <h2 className="bold">About</h2>
              </div>
              <div className="row row-padded-bottom">
                <div className="col-md-5 animate-box">

                  <div className="item">
                    <img className="img-responsive about-img" src={require('../images/about.jpeg')} alt="profile-img" />
                  </div>
                </div>

                <div className="col-md-6 col-md-push-1 animate-box">
                  
                  <div className="about-desc">

                    <div className="item">
                        <h2><span><Trans>{t("Name")}</Trans></span></h2>
                    </div>
                    <div className="desc">
                      <div className="rotate">
                        <h2 className="heading"><Trans>{t("about")}</Trans></h2>
                      </div>
                      <p><Trans>{t("Welcome to my site!")}</Trans><br/> <Trans>{t("I am Mackenzie, a software engineering master's student graduated from San Jose State University in December 2020.")}</Trans></p>
                      <p><Trans>{t("I am looking for a full-time software development position starting 2021.")}</Trans></p>
                      <p><Trans>{t("Please feel free to ")}</Trans><a href="mailto:mackenziejiang@gmail.com"><Trans>{t("email")}</Trans></a> <Trans>{t("me if you have any opportunities for me! Thank you!")}</Trans></p>
                      <p className="colorlib-social-icons">
                        <a style={{padding:'10px'}} href="https://www.linkedin.com/in/hejiang4/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" /></a>
                        <a style={{padding:'10px'}} href="https://github.com/masakichi4" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a>
                        <a style={{padding:'10px'}} href="https://www.youtube.com/channel/UC1P4878OVbvbfa4cZpG-EhQ/" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /></a>
                      </p>
                      
                      <p><Link to={process.env.PUBLIC_URL+"/Resume_HeJiang.pdf"} className="btn btn-primary btn-outline" target="_blank"><Trans>{t("view resume")}</Trans></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </div>
    );
  }
}

export default withTranslation("translations")(About);
