import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/NavbarComponent';
import HomePage from './pages/HomePage';

// Utils
//import PageShell from './utils/PageShell';
import ScrollToTop from './utils/scrollToTop';
import setAuthToken from './utils/setAuthToken';

// Routes
import Routes from './routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './components/StyledComponents/globalStyles';
// import { lightTheme, darkTheme } from './components/StyledComponents/Themes';

// Check if token avaiable
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// function getInitialTheme() {
//   const savedTheme = localStorage.getItem('theme');
//   return savedTheme ? savedTheme : 'light';
// }

// function getInitialThemeStyles() {
//   const savedTheme = localStorage.getItem('theme');
//   return savedTheme === 'dark' ? darkTheme : lightTheme;
// }

function App() {
  // const [theme, setTheme] = useState(getInitialTheme);
  // const [storedTheme, setStoredTheme] = useState(getInitialThemeStyles);

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   const currentTheme = localStorage.getItem('theme');
  //   if (currentTheme === theme && theme === 'light') {
  //     setStoredTheme(lightTheme);
  //   } else if (theme === 'dark') {
  //     setStoredTheme(darkTheme);
  //   }
  // }, [theme]);

  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    // <ThemeProvider theme={storedTheme}>
    //   <>
    //     <GlobalStyles />

    //   </>
    // </ThemeProvider>
    <Provider store={store}>
      <Router>
        <ScrollToTop />

        <Navbar />
        {/* <button onClick={themeToggler}>Switch Theme</button> */}

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
