import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CoverTextContent from "../../shared/CoverTextContent";

import './StaticCover.scss';

class StaticCover extends Component {
  render() {
    const {coverData, projectKey} = this.props;
    //const bgImage = require('../../../assets/img/' + projectKey + '-cover.jpg');

    return (
      <div className="StaticCover cover-wrapper" style={{backgroundImage: `url(${coverData.bgImg.src})`}}>
        <CoverTextContent title={coverData.title} description={coverData.description} logo={coverData.logo} projectKey={projectKey} callToAction />
      </div>
    );
  }
}

StaticCover.propTypes = {
  coverData: PropTypes.object,
  projectKey: PropTypes.string
};

export default StaticCover;
