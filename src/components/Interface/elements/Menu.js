import React, {Component} from 'react';

import './Menu.scss';

import MenuDots from "../../../assets/img/nav-menu-btn.svg";

class Menu extends Component {

  render() {
    return (
      <div className="nav-menu-btn">
        <img src={MenuDots} alt="nav meu btn" />
      </div>
    );
  }
}

export default Menu;
