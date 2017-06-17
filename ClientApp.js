/* global React ReactDOM */

var MyTitle = () => {
  return (
    React.createElement('div', null,
    React.createElement('h1', null, 'Check out this component!')
    )
  )
}

var MyFirstComponent = () => {
  return (
    React.createElement('div', null,
      React.createElement(MyTitle, null),
      React.createElement(MyTitle, null),
      React.createElement(MyTitle, null)
    )
  )
}

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
)