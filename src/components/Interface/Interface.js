import React, {Component} from 'react';

import SocialLinks from "./elements/SocialLinks";
import Menu from "./elements/Menu";
import VanityPlate from "./elements/VanityPlate";

class Interface extends Component {
  render() {
    return (
      <React.Fragment>
        <VanityPlate />
        <Menu />
        <SocialLinks />
      </React.Fragment>
    );
  }
}

export default Interface;
