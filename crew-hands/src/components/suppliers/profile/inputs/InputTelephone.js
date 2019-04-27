import React from "react";

class Telephone extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            name="telephone"
            value={this.props.telephone}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default Telephone;
