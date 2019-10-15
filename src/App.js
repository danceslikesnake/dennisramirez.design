import React, {Component, Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Interface,
  Decorations
} from './components';

import './utils/sass/bootstrap.scss';
import projectData from "./assets/json/portfolioData";

// parse out featured projects
let featuredProjects = projectData.filter((project) => {
  return project.featured === true;
});

//const OtherComponent = React.lazy(() => import('./OtherComponent'));
const FeaturedProjects = lazy(() => import('./components/FeaturedProjects/FeaturedProjects'));

class App extends Component {

  render() {
    return (
      <Router>
        <Decorations />
        <Interface />
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/starset">
              <div>ollo</div>
            </Route>
            <Route path="/">
              <FeaturedProjects featuredProjects={featuredProjects} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
