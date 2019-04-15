import React from "react";

class InputName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: String(e.target.value) });
  }
  handleSubmit() {
    debugger;
    alert(
      `Submitting First name ${this.state.firstName} and Last name${
        this.state.lastName
      }`
    );
  }
  render() {
    return (
      <form>
        <label htmlFor="inp" className="inp">
          {this.state.firstName}
          <input
            type="text"
            id="inp"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <span className="label">First name</span>
          <span className="border" />
        </label>
        <label htmlFor="inp" className="inp">
          {this.state.lastName}

          <input
            type="text"
            id="inp"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <span className="label">Last name</span>
          <span className="border" />
        </label>
        <button variant="raised" onClick={this.handleSubmit}>
          Speichern
        </button>
      </form>
    );
  }
}

export default InputName;
