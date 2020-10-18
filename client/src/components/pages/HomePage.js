import React from "react";
import Footer from "../FooterComponent/Footer";
import HowItWorks from "../HowItWorksComponent/HowItWorks";
import Landing from "../LandingComponent/Landing";

const HomePage = () => {
  return (
    <>
      <div>
        <Landing />
        <hr className="my-16" />
        <HowItWorks />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
