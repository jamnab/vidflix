import React, { Component } from 'react';
import preload from '../data.json';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <pre>{JSON.stringify(preload, null, 4)}</pre>
      </div>
    )
  }
}

export default Search;