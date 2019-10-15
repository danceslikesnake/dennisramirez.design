import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import './VanityPlate.scss';

class VanityPlate extends Component {
  routeChange = () => {
    let path = `/`;
    this.props.history.push(path);
  };

  render() {
    return (
      <button className="vanity-plate" onClick={() => this.routeChange()}>Dennis Ramirez</button>
    );
  }
}

export default withRouter(VanityPlate);
