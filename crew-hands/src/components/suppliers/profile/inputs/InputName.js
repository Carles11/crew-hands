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
        <label>
          <input
            type="text"
            name="firmName"
            value={this.props.firmName}
            onChange={this.props.handleChange}
          />
          <span>Firmen Name</span>
        </label>
        <label>
          <input
            type="text"
            name="contactName"
            value={this.props.contactName}
            onChange={this.props.handleChange}
          />
          <span>Kontaktperson</span>
        </label>

        <label>
          <input
            type="text"
            name="userName"
            value={this.props.userName}
            onChange={this.props.handleChange}
          />
          <span className="label">Benutzername</span>
        </label>
      </section>
    );
  }
}

export default InputName;
