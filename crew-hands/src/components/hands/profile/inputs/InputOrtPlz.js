import React from "react";

class OrtPlz extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <span className="label">Ort</span>
          <input
            type="text"
            id="inp"
            name="ort"
            value={this.props.ort}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>
        <label htmlFor="inp" className="inp">
          <span className="label">PLZ</span>
          <input
            type="text"
            id="inp"
            name="plz"
            value={this.props.plz}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default OrtPlz;
