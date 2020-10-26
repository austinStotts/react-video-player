import React, { Component } from 'react';
import Player from './components/player';

class App extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <div>{"hello world :)"}</div>
        <Player link="./naruto-shippuden-opening-16-silhouette.mp4 "/>
      </div>
    )
  }
}

export default App;