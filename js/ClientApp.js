import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing">
          <h1>Vidflix</h1>
          <input type="text" placeholder="search"/>
          <a href="" className="browse">or Browse All</a>
        </div>
      </div>
    )
  }
}

render(<App /> , document.getElementById('app'));