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
          {this.props.street}
          <InputStreet
            street={this.props.street}
            onChange={this.props.onChange}
          />
          <span className="border" />
          <label>Nr. </label>
          {this.props.streetnumber}
          <InputStreetNr
            streetnumber={this.props.streetnumber}
            onChange={this.props.onChange}
          />
        </Label>
        <Label>
          <label>Ort </label>
          {this.props.ort}
          <InputOrt
            ort={this.props.ort}
            onChange={this.props.onChange}
          />
          <label>Plz </label>
          {this.props.plz}
          <InputPlz
            plz={this.props.plz}
            onChange={this.props.onChange}
          />
        </Label>
      </section>
    );
  }
}

export default InputAddress;
