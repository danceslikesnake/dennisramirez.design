import React, {Component} from 'react';

import './BorderFrame.scss';

class BorderFrame extends Component {
  render() {
    return (
        <div className="BorderFrame">
            <span className="top" />
            <span className="right" />
            <span className="bottom" />
            <span className="left" />
        </div>
    );
  }
}

export default BorderFrame;
