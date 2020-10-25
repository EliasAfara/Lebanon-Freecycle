import React from "react";
import "./App.css";
import Navbar from "./components/NavbarComponent";
import UserNavbar from "./components/UserNavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DonationsPage from "./pages/DonationsPage";
import RequestsPage from "./pages/RequestsPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import FAQPage from "./pages/FAQPage";
import ContactUsPage from "./pages/ContactUsPage";
import PageShell from "./components/Effects/PageShell";
import ScrollToTop from "./components/Effects/scrollToTop";

function App() {
  const isLoggedIn = false;
  return (
    <>
      <Router>
        <ScrollToTop />

        {isLoggedIn ? <UserNavbar /> : <Navbar />}

        <Switch>
          <Route exact path="/" component={PageShell(HomePage)} />

          <Route exact path="/donations" component={PageShell(DonationsPage)} />

          <Route exact path="/requests" component={PageShell(RequestsPage)} />

          <Route exact path="/about" component={PageShell(AboutPage)} />
          <Route exact path="/login" component={PageShell(Login)} />

          <Route exact path="/register" component={PageShell(RegisterPage)} />

          <Route exact path="/faq" component={PageShell(FAQPage)} />

          <Route
            exact
            path="/contact-us"
            component={PageShell(ContactUsPage)}
          />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
