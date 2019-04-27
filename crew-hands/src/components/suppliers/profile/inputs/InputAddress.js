import React from "react";
import styled from "styled-components";

import InputOrt from "./inputsAddress/InputOrt";
import InputPlz from "./inputsAddress/InputPlz";
import InputStreet from "./inputsAddress/InputStreet";
import InputStreetNr from "./inputsAddress/InputStreetNr";

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

class InputAddress extends React.Component {
  render() {
    return (
      <section>
        <legend>Firmenadresse</legend>
        <Label>
          <label>Str. </label>
          <InputStreet
            value={this.props.street}
            handleChange={this.props.handleChange}
          />
          <span className="border" />
          <label>Nr. </label>
          <InputStreetNr
            value={this.props.streetNr}
            handleChange={this.props.handleChange}
          />
        </Label>
        <Label>
          <label>Ort </label>
          <InputOrt
            ort={this.props.ort}
            handleChange={this.props.handleChange}
          />
          <label>Plz </label>
          <InputPlz
            plz={this.props.plz}
            handleChange={this.props.handleChange}
          />
        </Label>
      </section>
    );
  }
}

export default InputAddress;
