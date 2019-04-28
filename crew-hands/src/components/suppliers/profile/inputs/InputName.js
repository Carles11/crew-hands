import React from "react";

class InputName extends React.Component {
  // handleAddName() {
  //   this.setState({
  //     hands: this.props.hands.concat([
  //       {
  //         firstName: `${this.props.firstName}`,
  //         lastName: `${this.props.lastName}`
  //       }
  //     ])
  //   });
  // }

  render() {
    return (
      <section>
        <legend>Firmenname</legend>
        <input
          type="text"
          name="firmName"
          value={this.props.firmName}
          onChange={this.props.handleChange} />
        <legend>Username</legend>
        <input
          type="text"
          name="userName"
          value={this.props.userName}
          onChange={this.props.handleChange} />
        <legend>Kontaktperson</legend>
        <label>Name</label>
        <input
          type="text"
          name="firstName"
          value={this.props.firstName}
          onChange={this.props.handleChange} />
        <label>Nachname</label>
        <input
          type="text"
          name="lastName"
          value={this.props.lastName}
          onChange={this.props.handleChange} />
      </section >
    );
  }
}

export default InputName;
