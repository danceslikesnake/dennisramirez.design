import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Controls.scss';

class Controls extends Component {
  handleChangeCover = (direction, projectCount, activeProjectKey) => {
    let key = activeProjectKey;
    let totalFeaturedProjects = projectCount - 1; // we want to exclude the intro

    if(direction === 'next') {
      if(key === totalFeaturedProjects)
        key = 1;
      else
        key++;
    } else {
      if(key === 1)
        key = totalFeaturedProjects;
      else
        key--;
    }
    this.props.initiateChange(key);
  };

  render() {
    const { projectsCount, activeProjectKey, tilesAreAnimating } = this.props;

    return (
      <ul className="Controls">
        {activeProjectKey > 0 &&
        <li>
          <div
            className="cover-btn prev"
            onClick={() => {
              if(!tilesAreAnimating)
                this.handleChangeCover('prev', projectsCount, activeProjectKey);
            }}>
            <i className="far fa-chevron-up"></i>
          </div>
        </li>
        }
        <li className="control-label">{activeProjectKey == 0 ? 'Work' : activeProjectKey + ' / ' + (projectsCount - 1)}</li>
        <li>
          <div
            className="cover-btn next"
            onClick={() => {
              if(!tilesAreAnimating)
                this.handleChangeCover('next', projectsCount, activeProjectKey);
            }}>
            <i className="far fa-chevron-down"></i>
          </div>
        </li>
      </ul>
    );
  }
}

Controls.propTypes = {
  activeProjectKey: PropTypes.number,
  projectsCount: PropTypes.number,
  initiateChange: PropTypes.func,
  tilesAreAnimating: PropTypes.bool
};

export default Controls;
