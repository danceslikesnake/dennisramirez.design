import React, {Component} from 'react';

import './SocialLinks.scss';

class SocialLinks extends Component {
  render() {
    return (
      <ul className="SocialLinks">
        <li><a target="_blank" rel="noopener noreferrer" href="mailTo:designexcathedra@gmail.com"><i className="far fa-envelope"></i></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dennisramirez/"><i className="fab fa-linkedin"></i></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/danceslikesnake"><i className="fab fa-facebook"></i></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DancesLikeSnake"><i className="fab fa-twitter"></i></a></li>
      </ul>
    );
  }
}

export default SocialLinks;
