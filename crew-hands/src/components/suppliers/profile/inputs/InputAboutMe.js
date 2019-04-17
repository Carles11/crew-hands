import React from "react";

class InputAboutMe extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="textarea"
            id="inp"
            name="aboutme"
            value={this.props.aboutMe}
            onChange={this.props.handleChange}
          />
          <span className="label">Über mich</span>
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default InputAboutMe;
