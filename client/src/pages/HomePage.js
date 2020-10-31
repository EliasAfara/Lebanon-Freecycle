import React from "react";
import Footer from "../components/layout/FooterComponent/Footer";
import HowItWorks from "../components/layout/HowItWorksComponent/HowItWorks";
import Landing from "../components/layout/LandingComponent/Landing";

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
