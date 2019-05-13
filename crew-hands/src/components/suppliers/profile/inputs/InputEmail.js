import React from "react";

class Email extends React.Component {
  render() {
    return (
      <label>
        <legend>E-Mail</legend>

        <input
          type="email"
          name="email"
          value={this.props.email}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default Email;
