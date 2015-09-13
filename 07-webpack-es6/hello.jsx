import React from 'react';

class HelloClass extends React.Component {
  render() {
    return <h1>Hello, class!</h1>
  }
}

React.render(
  <HelloClass />,
  document.getElementById('example')
);
