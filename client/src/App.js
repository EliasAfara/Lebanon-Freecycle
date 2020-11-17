import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/NavbarComponent';
import UserNavbar from './components/UserNavbarComponent';
import HomePage from './pages/HomePage';

// Utils
import PageShell from './utils/PageShell';
import ScrollToTop from './utils/scrollToTop';
import setAuthToken from './utils/setAuthToken';

// Routes
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// Check if token avaiable
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const isLoggedIn = false;
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />

        {isLoggedIn ? <UserNavbar /> : <Navbar />}

        <Switch>
          <Route exact path='/' component={PageShell(HomePage)} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
