import React, { Component } from 'react';


import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  render() {
    return (
      <div className="search">
        {preload.shows.map((show) => (
          <ShowCard {...show} key={show.imdbID} />
        ))}
      </div>
    )
  }
}

export default Search;