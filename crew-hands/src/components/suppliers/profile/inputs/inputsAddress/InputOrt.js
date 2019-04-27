import React from "react";

class Ort extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            name="ort"
            value={this.props.ort}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default Ort;
