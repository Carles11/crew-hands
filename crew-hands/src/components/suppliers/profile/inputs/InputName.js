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
            name="firmName"
            value={this.props.firmName}
            onChange={this.props.handleChange}
          />
          <span className="label">Firmen Name</span>
          <span className="border" />
        </label>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            name="contactName"
            value={this.props.contactName}
            onChange={this.props.handleChange}
          />
          <span className="label">Kontaktperson</span>
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default InputName;
