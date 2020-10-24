import React from "react";
import "./App.css";
import Navbar from "./components/NavbarComponent/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DonationsPage from "./pages/DonationsPage";
import RequestsPage from "./pages/RequestsPage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import FAQPage from "./pages/FAQPage";

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
        <Switch>
          <Route exact path="/faq" component={FAQPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
