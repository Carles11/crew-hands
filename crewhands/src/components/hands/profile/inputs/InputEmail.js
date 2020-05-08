import React from "react";

class InputEmail extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="email">
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
        </label>
      </section>
    );
  }
}

export default InputEmail;
