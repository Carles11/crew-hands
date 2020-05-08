import React from "react";

class InputName extends React.Component {
  handleAddName() {
    this.setState({
      hands: this.props.hands.concat([
        {
          firstName: `${this.props.firstName}`,
          lastName: `${this.props.lastName}`,
          userName: `${this.props.userName}`
        }
      ])
    });
  }

  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <span className="label">Vorname</span>
          <input
            type="text"
            id="inp"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>
        <label htmlFor="inp" className="inp">
          <span className="label">Nachname</span>
          <input
            type="text"
            id="inp"
            name="lastName"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>

        <label htmlFor="inp" className="inp">
          <span className="label">User name</span>
          <input
            type="text"
            id="inp"
            name="userName"
            value={this.props.userName}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default InputName;
