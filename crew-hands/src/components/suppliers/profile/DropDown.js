import React from "react";

class Email extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="dropdown"
            id="inp"
            name="dropdown"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <span className="label">Filter</span>
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default Email;
