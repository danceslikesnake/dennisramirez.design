import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IntroCover from "./covers/IntroCover";
import StaticCover from "./covers/StaticCover";
import Controls from "./Controls";
import Tiles from "../shared/Tiles";

import './FeaturedProjects.scss';

class FeaturedProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProjectKey: 0,
      indicatorHeight: 0,
      indicatorPosition: 0,
      tilesAreAnimating: false
    }
  }

  componentDidMount() {
    let height = 100 / (this.props.featuredProjects.length - 1);
    let position = height * (this.state.activeProjectKey - 1);
    this.setState({
      indicatorHeight: height,
      indicatorPosition: position
    });
  }

  initiateChange = (newProjectKey) => {
    let oldProject = this.state.activeProjectKey;
    this.adjustTheme('tiles', oldProject, newProjectKey);
    this.adjustTheme('featured-projects', oldProject, newProjectKey);
    this.setState({
      indicatorPosition: this.state.indicatorHeight * (newProjectKey - 1),
      tilesAreAnimating: true
    });
    this.tiles.coverAnimation(newProjectKey);
  };

  finishChange = (newProjectKey) => {
    this.setState({activeProjectKey: newProjectKey});
    this.tiles.revealAnimation();
  };

  cleanUpChange = () => {
    this.setState({
      tilesAreAnimating: false
    });
  };

  adjustTheme = (element, oldProject, newProject) => {
    if(this.props.featuredProjects[oldProject].theme) {
      let oldTheme = this.props.featuredProjects[oldProject].theme;
      document.getElementById(element).classList.remove(oldTheme);
    }
    if(this.props.featuredProjects[newProject].theme) {
      let newTheme = this.props.featuredProjects[newProject].theme;
      document.getElementById(element).classList.add(newTheme);
    }
  };

  renderProject = (project) => {
    switch(project.cover.type) {
      case 'static':
        return <StaticCover
          coverData={project.cover}
          projectKey={project.id}
        />;
      default:
        return <IntroCover
          coverData={project.cover}
          projectKey={project.id}
        />;
    }
  };

  render() {
    const {featuredProjects} = this.props;
    const {activeProjectKey, indicatorHeight, tilesAreAnimating, indicatorPosition} = this.state;

    return (
      <React.Fragment>
        <Tiles ref={div => this.tiles = div} onCover={this.finishChange} onReveal={this.cleanUpChange} />
        <div id="featured-projects">
          <Controls
            activeProjectKey={activeProjectKey}
            initiateChange={this.initiateChange}
            projectsCount={featuredProjects.length}
            tilesAreAnimating={tilesAreAnimating}
          />
          <div className="cover-scrim" />
          <div className="project-indicator" style={{top: indicatorPosition + '%', height: indicatorHeight + '%'}} />
          {this.renderProject(featuredProjects[activeProjectKey])}
        </div>
      </React.Fragment>
    );
  }
}

FeaturedProjects.propTypes = {
  featuredProjects: PropTypes.array
};

export default FeaturedProjects;
