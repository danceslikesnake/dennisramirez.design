import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TimelineLite} from "gsap";

import './Tiles.scss';

class Tiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: 'landscape',
      onCoverReturn: null
    };

    this.tiles = [];
    this.tilesFromTop = new TimelineLite({paused: true});
    this.tilesFromBottom = new TimelineLite({paused: true, onComplete: this.onCoverFinish});
    this.tilesFromTopReveal = new TimelineLite({paused: true});
    this.tilesFromBottomReveal = new TimelineLite({paused: true, onComplete: this.onRevealFinish});
    this.tilesFromTopPrev = new TimelineLite({paused: true});
    this.tilesFromBottomPrev = new TimelineLite({paused: true, onComplete: this.onCoverFinish});
    this.tilesFromTopRevealPrev = new TimelineLite({paused: true});
    this.tilesFromBottomRevealPrev = new TimelineLite({paused: true, onComplete: this.onRevealFinish});

    this.tilesFromLeft = new TimelineLite({paused: true});
    this.tilesFromRight = new TimelineLite({paused: true, onComplete: this.onCoverFinish});
    this.tilesFromLeftReveal = new TimelineLite({paused: true});
    this.tilesFromRightReveal = new TimelineLite({paused: true, onComplete: this.onRevealFinish});
    this.tilesFromLeftPrev = new TimelineLite({paused: true});
    this.tilesFromRightPrev = new TimelineLite({paused: true, onComplete: this.onCoverFinish});
    this.tilesFromLeftRevealPrev = new TimelineLite({paused: true});
    this.tilesFromRightRevealPrev = new TimelineLite({paused: true, onComplete: this.onRevealFinish});
  }

  componentDidMount() {
    this.updateOrientation();
    let landscapeTileSets = [
      [this.tiles[0], this.tiles[1], this.tiles[2], this.tiles[3]],
      [this.tiles[4], this.tiles[5], this.tiles[6], this.tiles[7]]
    ];
    let portraitTileSets = [
      [this.tiles[0], this.tiles[2], this.tiles[4], this.tiles[6]],
      [this.tiles[1], this.tiles[3], this.tiles[5], this.tiles[7]]
    ];

    this.tilesFromTop.staggerTo(landscapeTileSets[0], 0.3, {top: 0}, 0.1);
    this.tilesFromBottom.staggerTo(landscapeTileSets[1], 0.3, {top: '50%'}, 0.1);
    this.tilesFromTopReveal.staggerTo(landscapeTileSets[0], 0.3, {top: '-50%'}, 0.1);
    this.tilesFromBottomReveal.staggerTo(landscapeTileSets[1], 0.3, {top: '100%'}, 0.1);
    this.tilesFromTopPrev.staggerTo(landscapeTileSets[0].reverse(), 0.3, {top: 0}, 0.1);
    this.tilesFromBottomPrev.staggerTo(landscapeTileSets[1].reverse(), 0.3, {top: '50%'}, 0.1);
    this.tilesFromTopRevealPrev.staggerTo(landscapeTileSets[0].reverse(), 0.3, {top: '-50%'}, 0.1);
    this.tilesFromBottomRevealPrev.staggerTo(landscapeTileSets[1].reverse(), 0.3, {top: '100%'}, 0.1);

    this.tilesFromLeft.staggerTo(portraitTileSets[0], 0.4, {left: 0}, 0.1);
    this.tilesFromRight.staggerTo(portraitTileSets[1], 0.4, {left: '50%'}, 0.1);
    this.tilesFromLeftReveal.staggerTo(portraitTileSets[0], 0.4, {left: '-50%'}, 0.1);
    this.tilesFromRightReveal.staggerTo(portraitTileSets[1], 0.4, {left: '100%'}, 0.1);
    this.tilesFromLeftPrev.staggerTo(portraitTileSets[0].reverse(), 0.4, {left: 0}, 0.1);
    this.tilesFromRightPrev.staggerTo(portraitTileSets[1].reverse(), 0.4, {left: '50%'}, 0.1);
    this.tilesFromLeftRevealPrev.staggerTo(portraitTileSets[0].reverse(), 0.4, {left: '-50%'}, 0.1);
    this.tilesFromRightRevealPrev.staggerTo(portraitTileSets[1].reverse(), 0.4, {left: '100%'}, 0.1);
  }

  coverAnimation(onCoverReturn) {
    this.setState({onCoverReturn: onCoverReturn});
    if(this.state.orientation === 'landscape') {
      if(onCoverReturn.direction === 'next') {
        this.tilesFromTop.play(0);
        this.tilesFromBottom.play(0);
      } else {
        this.tilesFromTopPrev.play(0);
        this.tilesFromBottomPrev.play(0);
      }
    } else {
     if(onCoverReturn.direction === 'next') {
       this.tilesFromLeftPrev.play(0);
       this.tilesFromRightPrev.play(0);
     } else {
       this.tilesFromLeft.play(0);
       this.tilesFromRight.play(0);
     }
    }
  }

  onCoverFinish = () => {
    if(this.props.onCover)
      this.props.onCover(this.state.onCoverReturn);
  };

  revealAnimation(returnVals) {
    if(this.state.orientation === 'landscape') {
      if(returnVals.direction === 'next') {
        this.tilesFromTopReveal.play(0);
        this.tilesFromBottomReveal.play(0);
      } else {
        this.tilesFromTopRevealPrev.play(0);
        this.tilesFromBottomRevealPrev.play(0);
      }
    } else {
      if(returnVals.direction === 'next') {
        this.tilesFromLeftRevealPrev.play(0);
        this.tilesFromRightRevealPrev.play(0);
      } else {
        this.tilesFromLeftReveal.play(0);
        this.tilesFromRightReveal.play(0);
      }
    }
  }

  onRevealFinish = () => {
    if(this.props.onReveal)
      this.props.onReveal();
  };

  updateOrientation = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = '';

    if(width > height || width === height) {
      orientation = 'landscape';
    } else {
      orientation = 'portrait';
    }
    this.setState({
      orientation: orientation,
    });
    this.tiles.forEach((tile, index) => {
      tile.style = null;
    });
  };

  render() {
    return (
      <div id="tiles" className="CoverTiles">
        <div ref={div => this.tiles[0] = div} className="tile tile-0" />
        <div ref={div => this.tiles[1] = div} className="tile tile-1" />
        <div ref={div => this.tiles[2] = div} className="tile tile-2" />
        <div ref={div => this.tiles[3] = div} className="tile tile-3" />
        <div ref={div => this.tiles[4] = div} className="tile tile-4" />
        <div ref={div => this.tiles[5] = div} className="tile tile-5" />
        <div ref={div => this.tiles[6] = div} className="tile tile-6" />
        <div ref={div => this.tiles[7] = div} className="tile tile-7" />
      </div>
    );
  }
}

Tiles.propTypes = {
  onCover: PropTypes.func,
  onReveal: PropTypes.func
};

export default Tiles;
