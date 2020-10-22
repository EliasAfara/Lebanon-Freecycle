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
import ContactUsPage from "./pages/ContactUsPage";
import PageShell from "./components/Effects/PageShell";
import ScrollToTop from "./components/Effects/scrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={PageShell(HomePage)} />
        </Switch>
        <Switch>
          <Route exact path="/donations" component={PageShell(DonationsPage)} />
        </Switch>
        <Switch>
          <Route exact path="/requests" component={PageShell(RequestsPage)} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={PageShell(AboutPage)} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={PageShell(Login)} />
        </Switch>
        <Switch>
          <Route exact path="/register" component={PageShell(RegisterPage)} />
        </Switch>
        <Switch>
          <Route exact path="/faq" component={PageShell(FAQPage)} />
        </Switch>
        <Switch>
          <Route
            exact
            path="/contact-us"
            component={PageShell(ContactUsPage)}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
