import React, {Component} from 'react';

import './GridLines.scss';

class GridLines extends Component {
  render() {
    return (
        <div className="GridLines">
            <span className="x-axis" />
            <span className="y-axis" />
            <span className="extra-axis-1" />
            <span className="extra-axis-2" />
        </div>
    );
  }
}

export default GridLines;
