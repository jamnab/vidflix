import React, { Component } from 'react';
import { string } from 'prop-types';

class ShowCard extends Component {
  render() {
    return (
      <div className="show-card">
        <img alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
        <h3>{this.props.title}</h3>
        <h4>({this.props.year})</h4>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}

export default ShowCard;