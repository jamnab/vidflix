/* global React ReactDOM */

var MyTitle = () => {
  return (
    React.createElement('div', null,
    React.createElement('h1', null, 'Check out this component!')
    )
  )
}

// replace MyFirstComponent
var ce = React.createElement

var MyFirstComponent = () => {
  return (
    ce('div', null,
      ce(MyTitle, null),
      ce(MyTitle, null),
      ce(MyTitle, null)
    )
  )
}

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
)