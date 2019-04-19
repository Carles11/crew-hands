import React from "react";

class Email extends React.Component {
  render() {
    return (
      <section>
        <label>
          <input
            type="email"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <span>E-mail</span>
        </label>
      </section>
    );
  }
}

export default Email;