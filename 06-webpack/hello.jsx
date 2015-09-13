var React = require('react');

var HelloClass = React.createClass({
  render: function() {
    return (
      <h1>Hello, class!</h1>
    );
  }
});
React.render(
  <HelloClass />,
  document.getElementById('example')
);
