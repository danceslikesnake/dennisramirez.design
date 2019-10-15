import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DetailPages.scss';

class DetailPages extends Component {
  render() {
    const {projectData, projectKey} = this.props;
    const titleStatus = projectData.active ? 'is active.' : ' is inactive.';

    const bgImg = require('../../assets/img/' + projectKey + '-cover.jpg');
    const logo = require('../../assets/img/' + projectKey + '-logo.svg');
    const heroImg = require('../../assets/img/placeholder-responsive.png');

    return (
      <React.Fragment>
        <div className='detail-cover' style={{backgroundImage: 'url(' + bgImg + ')'}}>
          <img alt={projectKey + ' logo'} src={logo} className="detail-cover-logo" />
        </div>
        <div className="detail-content">
          <div className="container">
            <div className="columns">
              <div className="column">{projectData.title + ' ' + titleStatus}</div>
              <div className="column">
                {projectData.active ? (
                  projectData.links.map((link, index) => {
                    return <a target="_blank" rel="noopener noreferrer" href={link.url}>{link.label} <i className={link.icon}></i></a>
                  })
                ) : (
                  <i className="fad fa-sad-tear"></i>
                )}
              </div>
            </div>
            <div className="columns">
              <div className="column">{projectData.description}</div>
            </div>
            <div className="container detail-hero">
              <img src={heroImg} alt={projectKey + ' hero image'} />
            </div>
          </div>
        </div>
        <div style={{backgroundColor: '#B74CFB', marginTop: '-200px', paddingBottom: '100px'}}>
          <div className="container">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            asdasdads<br />asdasdads<br />asdasdads<br />asdasdads<br />asdasdads<br />asdasdads<br />asdasdads<br />asdasdads<br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DetailPages.propTypes = {
  projectKey: PropTypes.string,
  projectData: PropTypes.object
};

export default DetailPages;
