import React from "react";
import { MDBContainer } from "mdbreact";

const FooterCopyright = () => {
  return (
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: Elias Afara
      </MDBContainer>
    </div>
  );
};

export default FooterCopyright;
