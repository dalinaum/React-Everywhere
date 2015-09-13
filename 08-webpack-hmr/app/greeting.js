import React from "react";

export default React.createClass({
  render: function() {
    return (
        <div className="greeting">
          <h3>Hello, {this.props.name}!</h3>
        </div>
    );
  },
})
