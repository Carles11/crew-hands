import React from "react";

class InputName extends React.Component {

  render() {
    return (
      <section onChange={this.props.onChange}>
        <legend>Firmenname</legend>
        <input
          type="text"
          name="firmname"
          value={this.props.firmname}
          onChange={this.props.onChange}
        />
        <legend>Username</legend>
        <input
          type="text"
          name="username"
          value={this.props.username}
          onChange={this.props.onChange}
        />
        <legend>Kontaktperson</legend>
        <label>Name</label>
        <input
          type="text"
          name="firstname"
          value={this.props.firstname}
          onChange={this.props.onChange}
        />
        <label>Nachname</label>
        <input
          type="text"
          name="lastname"
          value={this.props.lastname}
          onChange={this.props.onChange}
        />
      </section >
    );
  }
}
export default InputName;
