import React, { Component } from "react";
import Particles from "react-particles-js";
export default class PrizesHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="prizesHeader">
          <div className="row banner">
            <div className="banner-text">
              <Particles height="200px" />
              <h1 className="responsive-headline">My Achivements</h1>
              <Particles height="200px" />
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#resume">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
