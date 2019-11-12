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
            onInputChange={this.props.onInputChange}
          />
          <span className="border" />
          <label>Nr. </label>
          {this.props.streetnumber}
          <InputStreetNr
            streetnumber={this.props.streetnumber}
            onInputChange={this.props.onInputChange}
          />
        </Label>
        <Label>
          <label>Ort </label>
          {this.props.city}
          <InputOrt
            city={this.props.city}
            onInputChange={this.props.onInputChange}
          />
          <label>Plz </label>
          {this.props.plz}
          <InputPlz
            zipcode={this.props.zipcode}
            onInputChange={this.props.onInputChange}
          />
        </Label>
      </section>
    );
  }
}

export default InputAddress;
