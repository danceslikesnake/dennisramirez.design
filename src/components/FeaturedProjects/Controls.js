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

let ts;

class Controls extends Component {
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchend', this.handleTouchEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchend', this.handleTouchEnd);
  }

  handleChangeCover = (direction, projectCount, activeProjectKey) => {
    let key = activeProjectKey;
    let totalFeaturedProjects = projectCount;

    if(direction === 'next') {
      if(key === totalFeaturedProjects - 1)
        key = 0;
      else
        key++;
    } else {
      if(key === 0)
        key = totalFeaturedProjects - 1;
      else
        key--;
    }
    if(key > 0) {
      document.body.classList.add('cancel-touch-reload');
    } else {
      document.body.classList.remove('cancel-touch-reload');
    }
    this.props.initiateChange(key, direction);
  };

  handleScroll = debounce((event) => {
    //Normalize event wheel delta
    var delta = event.wheelDelta / 30 || -event.detail;

    //If the user scrolled up, it goes to previous slide, otherwise - to next slide
    if(!this.props.tilesAreAnimating) {
      if(delta < -1)
        this.handleChangeCover('next', this.props.projectsCount, this.props.activeProjectKey);
      else if(delta > 1)
        this.handleChangeCover('prev', this.props.projectsCount, this.props.activeProjectKey);
    }
  }, 15);

  handleTouchStart = debounce((event) => {
    if(!this.props.tilesAreAnimating) {
      ts = event.touches[0].clientY;
    }
  }, 15);

  handleTouchEnd = debounce((event) => {
    if(!this.props.tilesAreAnimating) {
    let te = event.changedTouches[0].clientY;
      if (ts > te + 5) {
        this.handleChangeCover('next', this.props.projectsCount, this.props.activeProjectKey);
      } else if (ts < te - 5) {
        this.handleChangeCover('prev', this.props.projectsCount, this.props.activeProjectKey);
      }
    }
    event.preventDefault();
  }, 15);

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
        <li className="control-label">{activeProjectKey === 0 ? 'Work' : activeProjectKey + ' / ' + (projectsCount - 1)}</li>
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
