import React from "react";

class Telephone extends React.Component {
  render() {
    return (
      <section>
        <legend>Telefon</legend>
        <input
          type="text"
          id="inp"
          name="telephone"
          value={this.props.telephone}
          onChange={this.props.handleChange}
        />
        <span className="border" />
      </section>
    );
  }
}

export default Telephone;
