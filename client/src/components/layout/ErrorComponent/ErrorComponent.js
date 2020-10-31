import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorComponent.css";

const ErrorComponent = () => {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__Error">
        <h1>Error 404</h1>
        <div>
          <NavLink to="/">
            <h1>GO BACK HOME</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
