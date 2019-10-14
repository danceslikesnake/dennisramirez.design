import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  FeaturedProjects,
  Interface,
  Decorations
} from './components';

import './utils/sass/bootstrap.scss';
import projectData from "./assets/json/portfolioData";

// parse out featured projects
let featuredProjects = projectData.filter((project) => {
  return project.featured === true;
});

class App extends Component {
  render() {
    return (
      <Router>
        <Decorations />
        <Interface />
        <Switch>
          <Route path="/">
            <FeaturedProjects featuredProjects={featuredProjects} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
