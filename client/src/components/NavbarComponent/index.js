import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? <Sidebar isOpen={isOpen} toggleNavBar={toggleNavBar} /> : null}

      <Navbar toggleNavBar={toggleNavBar} />
    </>
  );
};

export default NavbarComponent;
