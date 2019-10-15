import React, {Component, Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Interface,
  Decorations,
  FeaturedProjects
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
      bgimgsLoaded: [],
      logosLoaded: []
    }
  }

  componentDidMount() {
    featuredProjects.forEach((project, index) => {
      if(project.id !== 'intro') {
        let img = new Image();
        img.src = require('./assets/img/' + project.id + '-cover.jpg');
        img.onload= () => {
          let arr = this.state.imgsLoaded;
          arr.push(img);
          featuredProjects[index].cover.bgImg = img;
          this.setState({imgsLoaded: arr});
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
    console.log(featuredProjects);
    return (
      <Router>
        <Decorations />
        <Interface />
        {this.state.bgImgsLoaded.length == 5 && this.state.logosLoaded.length == 5 ? (
          <Switch>
            <Route path="/starset">
              <div>ollo</div>
            </Route>
            <Route path="/">
              <FeaturedProjects featuredProjects={featuredProjects} />
            </Route>
          </Switch>
        ) : (
          <div>bollo oolb slj lkajsd fa<br />bollo oolb slj lkajsd fa<br />bollo oolb slj lkajsd fa<br />bollo oolb slj lkajsd fa<br />bollo oolb slj lkajsd fa<br />bollo oolb slj lkajsd fa<br /></div>
        )

        }
      </Router>
    );
  }
}

export default App;
