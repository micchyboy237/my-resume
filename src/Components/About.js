import React, { Component } from 'react';
import Fade from 'react-reveal';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = 'images/' + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const country = this.props.data.address.country;
    const maplink = this.props.data.address.maplink;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={profilepic} alt="Profile Pic" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <div className="address">
                    <a href={`tel:${phone}`}>
                      <i className="fa fa-phone"></i>
                      {phone}
                    </a>
                    <br />
                    <a href={`mailto:${email}`}>
                      <i
                        className="fa fa-envelope"
                        style={{
                          fontSize: '12px'
                        }}
                      ></i>
                      {email}
                    </a>
                    <br />
                    <a
                      href={maplink}
                      target="_blank"
                      style={{
                        display: 'flex'
                      }}
                    >
                      <i className="fa fa-map-marker"></i>
                      <div
                        style={{
                          flex: 1,
                          marginBottom: 0
                        }}
                      >
                        {city}, {state}
                        <br />
                        {country}
                      </div>
                    </a>
                  </div>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} download className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
