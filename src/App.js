import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Interface,
  Decorations,
  FeaturedProjects,
  DetailPages
} from './components';

import './utils/sass/bootstrap.scss';
import projectData from "./assets/json/portfolioData";

// parse out featured projects
let featuredProjects = projectData.filter((project) => {
  return project.featured === true;
});


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgImgsLoaded: [],
      logosLoaded: []
    }
  }

  componentDidMount() {
    featuredProjects.forEach((project, index) => {
      if(project.id !== 'intro') {
        let img = new Image();
        img.src = require('./assets/img/' + project.id + '-cover.jpg');
        img.onload= () => {
          let arr = this.state.bgImgsLoaded;
          arr.push(img);
          featuredProjects[index].cover.bgImg = img;
          this.setState({bgImgsLoaded: arr});
        };

        let img2 = new Image();
        img2.src = require('./assets/img/' + project.id + '-logo.svg');
        img2.onload= () => {
          let arr = this.state.logosLoaded;
          arr.push(img2);
          featuredProjects[index].cover.logo = img2;
          this.setState({logosLoaded: arr});
        };
      }
    });
  }

  render() {
    return (
      <Router>
        <Decorations />
        <Interface />
          <Switch>
            <Route
              path="/project/:id"
              render={(props) => {
                let selectedProject = projectData.filter((project) => {
                  return project.id === props.match.params.id;
                });
                return(
                  <DetailPages projectKey={selectedProject[0].id} projectData={selectedProject[0].detail} />
                  );
              }}
            />
            <Route path="/">
              <FeaturedProjects featuredProjects={featuredProjects} />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
