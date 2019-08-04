import React, { Component } from "react";
import Typed from "react-typed";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#certificate">
                  Certificates
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#achive">
                  Achievements
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#hall">
                  Hall of Fame
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <Typed
                className="responsive-headline"
                strings={["I am Swapnadeep Mohapatra"]}
                typeSpeed={40}
                style={{
                  fontSize: 70,
                  color: "#fff",
                  fontWeight: "bold"
                }}
              />
              <br />
              <div
                style={{
                  marginTop: 50
                }}
              />
              <Typed
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif ",
                  fontSize: 20
                }}
                strings={[
                  "Developer by passion",
                  "Student by career",
                  "Programmer by profession"
                ]}
                loop
                typeSpeed={40}
                backSpeed={70}
              />
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
