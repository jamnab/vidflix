import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Landing}></Route>
          <Route path="/search" component={Search}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

render(<App /> , document.getElementById('app'));