import React from 'react';

var MyTitle = (props) => {
  return (
    ce('div', null,
    ce('h1', {style: {color: props.color}}, props.title)
    )
  )
}

export default MyTitle;