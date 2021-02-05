import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// Utils
import ScrollToTop from './utils/scrollToTop';
import setAuthToken from './utils/setAuthToken';

// Components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQPage from './pages/FAQPage';

// Routes
import Routes from './routing/Routes';

import './App.css';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './costumeHooks/useDarkMode';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './Themes';

// Check if token avaiable
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <GlobalStyles />
          <Navbar theme={theme} themeToggler={toggleTheme} />

          <Switch>
            <Route exact path='/' component={HomePage} />

            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact-us' component={ContactUsPage} />
            <Route exact path='/faq/:faq' component={FAQPage} />

            <Route component={Routes} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
