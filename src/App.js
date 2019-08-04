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
import PrizesHeader from "./components/PrizesHeader";
import Achive from "./components/Achive";
import HallHeader from "./components/HallHeader";
import Hall from "./components/Hall";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <WorkHeader resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Certificates resumeData={resumeData} />
        <AchivementsHeader resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <PrizesHeader resumeData={resumeData} />
        <Achive resumeData={resumeData} />
        <HallHeader />
        <Hall />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
