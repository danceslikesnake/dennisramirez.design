import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Controls.scss';

const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
};

class Controls extends Component {
  componentDidMount() {
    window.addEventListener('wheel', debounce(this.handleScroll, 10));
    window.addEventListener('touchstart', debounce(this.handleScroll, 10));
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', debounce(this.handleScroll, 10));
    window.addEventListener('touchstart', debounce(this.handleScroll, 10));
  }

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

  handleScroll = (event) => {
    //Normalize event wheel delta
    var delta = event.wheelDelta / 30 || -event.detail;

    //If the user scrolled up, it goes to previous slide, otherwise - to next slide
    if(!this.props.tilesAreAnimating) {
      if(delta < -1)
        this.handleChangeCover('next', this.props.projectsCount, this.props.activeProjectKey);
      else if(delta > 1)
        this.handleChangeCover('prev', this.props.projectsCount, this.props.activeProjectKey);
    }
  };

  handleTouch = (event) => {
    alert('ollo');
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
