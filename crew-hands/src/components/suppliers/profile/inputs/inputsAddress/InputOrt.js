import React from "react";

class Ort extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            name="city"
            value={this.props.city}
            onChange={this.props.onInputChange}
          />
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default Ort;
