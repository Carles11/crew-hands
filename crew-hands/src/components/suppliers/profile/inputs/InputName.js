import React from "react";

class InputName extends React.Component {
  handleAddName() {
    this.setState({
      hands: this.props.hands.concat([
        {
          firstName: `${this.props.firstName}`,
          lastName: `${this.props.lastName}`
        }
      ])
    });
  }

  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
          <span className="label">Vorname</span>
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
          <span className="label">Nachname</span>
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default InputName;
