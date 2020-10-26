import React, { Component } from 'react';

class Player extends Component {
  constructor (props) {
    super(props);

    this.state = {
      playPauseText: 'pause'
    }

    this.playPause = this.playPause.bind(this);
  }

  playPause () {
    let video = document.getElementById('video');
    if(video.paused) {
      video.play();
      this.setState({playPauseText: 'play'});
    } else {
      video.pause();
      this.setState({playPauseText: 'pause'});
    }
  }

  fullscreen () {
    let video = document.getElementById('video');
    if(video.requestFullScreen){
      video.requestFullScreen();
    } else if(video.webkitRequestFullScreen){
      video.webkitRequestFullScreen();
    } else if(video.mozRequestFullScreen){
      video.mozRequestFullScreen();
    }
  }

  render () {
    return (
      <div>
        <video 
          id="video"
          onClick={this.playPause}
          onDoubleClick={this.fullscreen}
          >
          <source src={this.props.link} type="video/mp4"></source>
        </video>
        <button onClick={this.playPause}>{this.state.playPauseText}</button>
      </div>
    )
  }
}

export default Player;