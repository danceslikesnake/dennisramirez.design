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
    img1.src = 'https://images.unsplash.com/photo-1554158577-dd684bc228fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
    img1.onload = () =>{

    };

    let img2 = new Image();
    img2.src = 'https://images.unsplash.com/photo-1563212107-ea92a7ba3e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2563&q=80';
    img2.onload = () =>{

    };

    let img3 = new Image();
    img3.src = 'https://images.unsplash.com/photo-1563212108-928913ca0ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2563&q=80';
    img3.onload = () =>{

    };

    let img4 = new Image();
    img4.src = 'https://images.unsplash.com/photo-1563109696-9a5563d6e0ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2554&q=80';
    img4.onload = () =>{

    }

    let img5 = new Image();
    img5.src = Img5;
    img5.onload = () =>{

    }
  }
}

export default OtherComponent;
