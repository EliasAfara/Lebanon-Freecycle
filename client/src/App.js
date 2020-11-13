import React from 'react';
import './App.css';
import Navbar from './components/NavbarComponent';
import UserNavbar from './components/UserNavbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import PageShell from './utils/PageShell';
import ScrollToTop from './utils/scrollToTop';
import Routes from './components/routing/Routes';

function App() {
  const isLoggedIn = false;
  return (
    <>
      <Router>
        <ScrollToTop />

        {isLoggedIn ? <UserNavbar /> : <Navbar />}

        <Switch>
          <Route exact path='/' component={PageShell(HomePage)} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
