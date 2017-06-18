import React from 'react';
import { render } from 'react-dom';

import MyTitle from './MyTitle';

const MyFirstComponent = () => {
  return (
    <div>
      <MyTitle title="House of Cards" color="rebeccapurple" />
      <MyTitle title="Orange is the New Black" color="peru" />
      <MyTitle title="Stranger Things" color="burlywood" />
    </div>
  )
}

render(
  React.createElement(<MyFirstComponent />), document.getElementById('app')
);