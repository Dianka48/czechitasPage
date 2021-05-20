import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <Switch>
      <Route path="/project" exact>
        <Navigation />
        <Project />
      </Route>
      <Route path="/about-me" exact>
        <Navigation />
        <AboutMe />
      </Route>
      <Route path="*">
        <Redirect to="/project" />
      </Route>
    </Switch>
  );
}

export default App;
