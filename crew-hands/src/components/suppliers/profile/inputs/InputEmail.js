import React from "react";

class Email extends React.Component {
  render() {
    return (
      <section>
        <legend>E-Mail</legend>

        <input
          type="email"
          name="email"
          value={this.props.email}
          onChange={this.props.handleChange}
        />
      </section>
    );
  }
}

export default Email;
