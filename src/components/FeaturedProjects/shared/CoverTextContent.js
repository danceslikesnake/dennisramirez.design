import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './CoverTextContent.scss';

class CoverTextContent extends Component {
  render() {
    const {projectKey, title, description, callToAction, logo} = this.props;

    return (
      <React.Fragment>
        <div className="CoverTextContent has-text-centered-desktop">
          {(projectKey !== 'intro' && logo) &&
          <div className="cover-logo"><img src={logo.src} alt={projectKey + "-logo"} /></div>
          }
          <h1 className="cover-title">{title}</h1>
          <p className={projectKey === 'intro' ? 'cover-description charcoal' : 'cover-description'}>{description}</p>
          {callToAction ? (
            <Link className="cover-call-to-action" to={'/project/' + projectKey}>View Project <i className="fad fa-arrow-circle-right"></i></Link>
          ) : (
            <span className="cover-call-to-action">&nbsp;</span>
          )}
        </div>
      </React.Fragment>
    );
  }
}

CoverTextContent.propTypes = {
  projectKey: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  callToAction: PropTypes.bool
};

export default CoverTextContent;
