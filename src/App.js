import React, { Component } from 'react';
import profilePhoto from './img/photo-1.jpg';
import constant, { infoForLeft } from './data';
import { SocialIcons } from './components/social-icons';
import { Home } from './components/home';
import { Resume } from './components/resume';
import { Portfolio } from './components/portfolio';
import { PortfolioDetails } from './components/portfolio-details';
import { Contact } from './components/contact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  makeProfileInfoLi = () => {
    console.log('making profile info li')
    return infoForLeft.map((data, index) => {
      return <li key={index}><span>{data.name}: </span>{data.value}</li>
    })
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="left box-shadow">
            <div className="profile-name">
              <span className="name">{constant.name}</span><br />
              <span className="designation">{constant.title}</span>
            </div>
            <div className="profile-photo">
              <img src={profilePhoto} alt="Profile" />
            </div>
            <ul className="profile-info">
              <li></li>
              {this.makeProfileInfoLi()}
            </ul>
            {/* <div className="download-cv button hoverable">
              <a>
                Download Cv
              <i className="fa fa-download"></i>
              </a>
            </div> */}
          </div>
          <div className="right">
            <header className="header">
              <nav className="top-nav box-shadow">
                <ul className="tabs">
                  <li className="home hoverable">
                    <Link to="/me">
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/me/resume">Resume</Link>
                  </li>
                  <li>
                    <Link to="/me/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/me/contact">Contact</Link>
                  </li>
                </ul>
                <div className="nav-right">
                  <SocialIcons />
                  {/* <div className="button hoverable">
                    <a>
                      Download Cv
                    <i className="fa fa-download"></i>
                    </a>
                  </div> */}
                </div>
              </nav>
            </header>
            <div className="content box-shadow">
              <Route exact path="/me" component={Home} />
              <Route path="/me/resume" component={Resume} />
              <Route path="/me/portfolio" component={Portfolio} />
              <Route path="/me/portfolio-details" component={PortfolioDetails} />
              <Route path="/me/contact" component={Contact} />
            </div>
            <footer className="footer">
              <div className="footer-name">{constant.name}.</div>
              <div className="copyright"> &copy; {new Date().getFullYear()} All rights reserved.</div>
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
