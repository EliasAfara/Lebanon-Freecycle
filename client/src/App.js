import React from "react";
import "./App.css";
import Navbar from "./components/NavbarComponent/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import DonationsPage from "./components/pages/DonationsPage";
import RequestsPage from "./components/pages/RequestsPage";
import AboutPage from "./components/pages/AboutPage";
import Login from "./components/pages/Login";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path="/donations" component={DonationsPage} />
        </Switch>
        <Switch>
          <Route exact path="/requests" component={RequestsPage} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
