import React from "react";

class InputTelephone extends React.Component {
  render() {
    return (
      <section>
        <label>
          <span>Telefon</span>
          <input
            type="text"
            name="telephone"
            value={this.props.telephone}
            onChange={this.props.handleChange}
          />
        </label>
      </section>
    );
  }
}

export default InputTelephone;
