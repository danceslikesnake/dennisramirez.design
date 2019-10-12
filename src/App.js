import React from 'react';
import './utils/sass/bootstrap.scss';
import {
    GridLines,
    BorderFrame
} from './components';

function App() {
  return (
      <React.Fragment>
        <GridLines />
        <BorderFrame />
        <div style={{zIndex: 1}} className="container"><br /><br /><a href="http://google.com">ollo bollo <i className="far fa-arrows-v"></i></a></div>
      </React.Fragment>
  );
}

export default App;
