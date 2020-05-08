import React from "react";

class InputAboutMe extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="about me">
          <span>Über mich</span>
          <input
            type="text"
            name="aboutMe"
            value={this.props.aboutMe}
            onChange={this.props.handleChange}
          />
        </label>
      </section>
    );
  }
}

export default InputAboutMe;
