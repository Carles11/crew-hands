import React from "react";

class InputName extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
          <span className="label">First name</span>
          <span className="border" />
        </label>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            name="lastName"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          />
          <span className="label">Last name</span>
          <span className="border" />
        </label>
        <button variant="raised" onClick={this.props.handleSubmit}>
          Speichern
        </button>
      </form>
    );
  }
}

export default InputName;
