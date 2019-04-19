import React from "react";

class InputAboutMe extends React.Component {
  render() {
    return (
      <section>
        <label>
          <input
            type="text"
            name="aboutme"
            value={this.props.aboutMe}
            onChange={this.props.handleChange}
          />
          <span>Über mich</span>
        </label>
      </section>
    );
  }
}

export default InputAboutMe;
