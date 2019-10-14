import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CoverTextContent.scss';

class CoverTextContent extends Component {
  render() {
    const {projectKey, title, description, callToAction} = this.props;

    return (
      <React.Fragment>
        <div className="CoverTextContent has-text-centered">
          {projectKey != 'intro' &&
          <div className="cover-logo"><img src={require('../../../assets/img/' + projectKey + '-logo.svg')} alt={projectKey + "-logo"} /></div>
          }
          <h1 className="cover-title">{title}</h1>
          <p className={projectKey == 'intro' ? 'cover-description charcoal' : 'cover-description'}>{description}</p>
          {callToAction ? (
            <a className="cover-call-to-action" href="http://www.google.com">View Project <i className="fad fa-arrow-circle-right"></i></a>
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
