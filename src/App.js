import React, { Component } from 'react';
import './App.css';
import profilePhoto from './img/photo-1.jpg'
import profile from './constant'
import { infoForLeft } from './constant'

class App extends Component {

  makeProfileInfoLi = () => {
    console.log('making profile info li')
    return infoForLeft.map((data, index) => {
      return <li key={index}><span>{data.name}: </span>{data.value}</li>
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="left box-shadow">
          <div className="profile-name">
            <span className="name">{profile.name}</span><br />
            <span className="designation">{profile.title}</span>
          </div>
          <div className="profile-photo">
            <img src={profilePhoto} alt="Profile" />
          </div>
          <ul className="profile-info">
            <li></li>
            {this.makeProfileInfoLi()}
          </ul>
          <div className="download-cv button hoverable">
            <a>
              Download Cv
              <i className="fa fa-download"></i>
            </a>
          </div>
        </div>
        <div className="right">
          <header className="header">
            <nav className="top-nav box-shadow">
              <ul className="tabs">
                <li className="home hoverable">
                  <a>
                    <i className="fa fa-home"></i>
                  </a>
                </li>
                <li><a className="active">Resume</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact</a></li>
              </ul>
              <div class="nav-right">
                <div class="social-icons">
                  <a><i class="fab fa-github"></i></a>
                  <a><i class="fab fa-stack-overflow"></i></a>
                  <a><i class="fab fa-linkedin"></i></a>
                  <a><i class="fab fa-blogger"></i></a>
                </div>
                <div className="button hoverable">
                  <a>
                    Download Cv
                    <i className="fa fa-download"></i>
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <div className="content box-shadow">
            <section>
              <h3 className="section-header">About Me</h3>
              <div className="section-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sit! Qui
                inventore saepe ipsam in ipsa alias molestiae iste repudiandae facere quos,
                veniam nostrum quaerat commodi enim cum at ducimus.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officia eos
                ullam facere ducimus accusamus. Consectetur optio sint doloremque molestiae id, consequuntur ipsum, officia quaerat cumque magni perspiciatis suscipit iusto?</p>
              </div>
            </section>
            <section>
              <h3 className="section-header">My Services</h3>
              <div className="section-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sit! Qui
                inventore saepe ipsam in ipsa alias molestiae iste repudiandae facere quos,
                veniam nostrum quaerat commodi enim cum at ducimus.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officia eos
                ullam facere ducimus accusamus. Consectetur optio sint doloremque molestiae id, consequuntur ipsum, officia quaerat cumque magni perspiciatis suscipit iusto?</p>
              </div>
            </section>
          </div>
          <footer className="footer"></footer>
        </div>
      </div>
    );
  }
}

export default App;
