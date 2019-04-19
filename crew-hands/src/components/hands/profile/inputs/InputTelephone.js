import React from "react";

class InputTelephone extends React.Component {
  render() {
    return (
      <section>
        <label>
          <input
            type="text"
            name="telephone"
            value={this.props.telephone}
            onChange={this.props.handleChange}
          />
          <span>Telefon</span>
        </label>
      </section>
    );
  }
}

export default InputTelephone;
