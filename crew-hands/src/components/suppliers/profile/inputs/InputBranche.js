import React from "react";

class InputBranche extends React.Component {
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
          <span>Branche der Firma</span>
        </label>
      </section>
    );
  }
}

export default InputBranche;
