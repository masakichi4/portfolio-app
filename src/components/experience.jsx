import React, { Component } from 'react';
import { withTranslation, Trans } from "react-i18next";

const plantImg = require('../images/plants.jpeg');
const teaImg = require('../images/tea.jpeg');


class Experience extends Component {
  render() {
  	const { t } = this.props;

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
	                      <span><Trans>{t("experience")}</Trans></span>
	                      <h2><Trans>{t("Education & Work")}</Trans></h2>
	                    </div>
	                  </div>
	                  <div className="row">
	                    <div className="col-md-12">
	                      <div className="rotate">
	                        <h2 className="heading"><Trans>{t("experience")}</Trans></h2>
	                      </div>
	                    </div>
	                    <div className="col-md-12">
	                      <div className="services ">
	                        <h3>Fortinet <span style={{padding:'20px'}}> 2021.2</span> &nbsp;</h3>
	                        <p><Trans>{t("Web Development")}</Trans></p>
	                      </div>
	                   	  <div className="services ">
	                        <h3>Spontit <span style={{padding:'20px'}}> 2020.2~2020.8</span> &nbsp;<a href='#spontit-demo'><Trans>{t("demo")}</Trans></a></h3>
	                        <p><Trans>{t("Software Development Internship")}</Trans></p>
	                        <p><Trans>{t("- Built the startup’s website from scratch in React with reusable components and dynamic components, boosting the number of daily active users by 3x.")}</Trans><br/>
	                        <Trans>{t("- Rendered the app with an Express server, decreased load time by 50% through code splitting.")}</Trans><br/>
	                        <Trans>{t("- Worked in pair to implement and debug API functions in Python to maneuver data in DynamoDB.")}</Trans><br/>
	                        <Trans>{t("- Built IFTTT integration for front & back-end, achieved ~1000 applet runs in a month of publishing.")}</Trans></p>
	                      </div>
	                      <div className="services ">
	                        <h3>Togg <span style={{padding:'20px'}}> 2018.12~2019.1</span></h3>
	                        <p><Trans>{t("Software Development Internship")}</Trans></p>
	                        <p><Trans>{t("- Individually implemented a web app in Vue for tracking health device status for internal use.")}</Trans> <br/>
	                        <Trans>{t("- Tracked 200 devices with Google PubSub and reflected real-time statuses on a dashboard; the company could catch & locate offline devices within less than an hour, which would take days to be noticed before.")}</Trans></p>
	                      </div>
	                      <div className="services ">
	                        <h3><Trans>{t("B.S University of California, Berkeley")}</Trans>	<span style={{padding:'20px'}}>2014.8~2018.5</span></h3>
	                        <p><Trans>{t("Cognitive Science (concentration in Computer Science), Japanese Language and Literature")}</Trans></p>
	                      </div>
	                      <div className="services ">
	                        <h3><Trans>{t("M.S San Jose State University")}</Trans><span style={{padding:'20px'}}>2018.8~2020.12</span></h3>
	                        <p><Trans>{t("Software Engineering")}</Trans></p>
	                      </div>
	                      <p><a href='#top' className="btn btn-primary btn-outline"><Trans>{t("Back to top")}</Trans></a></p>
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
	                      <h2><Trans>{t("Skills")}</Trans></h2>
	                    </div>
	                  </div>
	                  <div className="row">
	                    <div className="col-md-12">
	                      <div className="rotate">
	                        <h2 className="heading"><Trans>{t("Skills")}</Trans></h2>
	                      </div>
	                    </div>
	                    <div className="col-md-6">
	                      <div className="services ">
	                        <h3><Trans>{t("1 - Programming")}</Trans></h3>
	                        <ul>
	                          <li>Java</li>
	                          <li>Python</li>
	                          <li>Node.JS</li>
	                          <li>PHP</li>
	                        </ul>
	                      </div>
	                      <div className="services ">
	                        <h3><Trans>{t("2 - Web Development")}</Trans></h3>
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
	                        <h3><Trans>{t("3 - Database")}</Trans></h3>
	                        <ul>
	                          <li>SQL</li>
	                          <li>MySQL</li>
	                          <li>MongoDB</li>
	                          <li>DynamoDB</li>
	                        </ul>
	                      </div>
	                      <div className="services ">
	                        <h3><Trans>{t("4 - Languages")}</Trans></h3>
	                        <ul>
	                          <li><Trans>{t("Chinese")}</Trans></li>
	                          <li><Trans>{t("English")}</Trans></li>
	                          <li><Trans>{t("Japanese - JLPT N1 certified")}</Trans></li>
	                          <li><Trans>{t("Chinese Xiang dialect")}</Trans></li>
	                        </ul>
	                      </div>
	                      <p><a href='#top' className="btn btn-primary btn-outline"><Trans>{t("Back to top")}</Trans></a></p>
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

export default withTranslation("translations")(Experience);