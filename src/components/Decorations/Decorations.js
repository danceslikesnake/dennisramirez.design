import React, {Component} from 'react';

import BorderFrame from "./elements/BorderFrame";
import GridLines from "./elements/GridLines";

class Decorations extends Component {

  render() {
    return (
      <React.Fragment>
        <BorderFrame />
        <GridLines />
      </React.Fragment>
    );
  }
}

export default Decorations;
