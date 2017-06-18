import React from 'react';

var MyTitle = props => {
  return (
    React.createElement('div', null,
    React.createElement('h1', {style: {color: props.color}}, props.title)
    )
  )
}

export default MyTitle;