import React from "react";

class Email extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="email"
            id="inp"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <span className="label">E-mail</span>
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default Email;
