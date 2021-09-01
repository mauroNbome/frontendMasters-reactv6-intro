import { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { SearchParams } from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
const App = () => {
  // Here we set the value we want to be default
  const theme = useState('darkblue');

  return (
    // Context allows us to pass props down directly to our app, in this example
    // We're passing data of a theme (in this case that's the best way to do it).
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1 id="my-brand">Adopt Me!</h1>
            </Link>
          </header>

          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>

            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
