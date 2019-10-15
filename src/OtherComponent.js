import React, {Component} from 'react';

import Img1 from './assets/img/starset-cover.jpg';
import Img2 from './assets/img/alchemy-cover.jpg';
import Img3 from './assets/img/walaapp-cover.jpg';
import Img4 from './assets/img/punkgoes-logo.svg';
import Img5 from './assets/img/unbranded-cover.jpg';

class OtherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allImagesLoaded: false
    }
  }

  componentDidMount() {
    let img1 = new Image();
    img1.src = Img1;
    img1.onload = () =>{

    };

    let img2 = new Image();
    img2.src = Img2;
    img2.onload = () =>{

    };

    let img3 = new Image();
    img3.src = Img3;
    img3.onload = () =>{

    };

    let img4 = new Image();
    img4.src = Img4;
    img4.onload = () =>{

    }

    let img5 = new Image();
    img5.src = Img5;
    img5.onload = () =>{

    }
  }
}

export default OtherComponent;
