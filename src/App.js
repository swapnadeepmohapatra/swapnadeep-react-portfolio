import React, { Component } from "react";
import Header from "./components/Header";
import WorkHeader from "./components/WorkHeader";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Certificates from "./components/Certificates";
import AchivementsHeader from "./components/AchivementsHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <WorkHeader resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <AchivementsHeader resumeData={resumeData} />
        <Certificates resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
