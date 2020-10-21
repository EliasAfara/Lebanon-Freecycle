import React from "react";
import Footer from "../components/FooterComponent/Footer";
import HowItWorks from "../components/HowItWorksComponent/HowItWorks";
import Landing from "../components/LandingComponent/Landing";

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
