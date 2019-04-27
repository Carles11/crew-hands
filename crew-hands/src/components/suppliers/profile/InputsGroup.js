import React from "react";
import styled from "styled-components";

import InputName from "./inputs/InputName";
import InputEmail from "./inputs/InputEmail";
import InputAddress from "./inputs/InputAddress";
import InputTelephone from "./inputs/InputTelephone";
import InputSubmitButton from "./inputs/InputSubmitButton";
import InputVatNumber from "./inputs/InputVatNumber";

const Form = styled.form`
  max-width: 90%;
  padding-left: 20px;
`;

class InputsGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firmName: "",
      firstName: "",
      lastName: "",
      userName: "",
      street: "",
      streetNr: "",
      email: "",
      ort: "",
      plz: "",
      telephone: "",
      vatNumber: "",

      hands: [
        {
          firstName: "",
          lastName: "",
          userName: "",
          street: "",
          streetNr: "",
          email: "",
          ort: "",
          plz: "",
          telephone: "",
          vatNumber: ""
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: (e.target.value) });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, hands } = this.state;
    alert(
      `Incorporated: ${firstName} ${lastName} to hands list. ${
      hands.length
      } hands on that list`
    );
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Supplier Profil</h2>
        <h3>Firmendaten</h3>

        <InputName
          firmName={this.state.firmName}
          contactName={this.state.contactName}
          hands={this.state.hands}
          handleChange={this.handleChange}
        />
        <InputAddress
          street={this.state.street}
          streetNr={this.state.streetNr}
          ort={this.state.ort}
          plz={this.state.plz}
          handleChange={this.handleChange}
        />
        <label>E-Mail</label>
        <InputEmail email={this.state.email} handleChange={this.handleChange} />
        <label>Telefon</label>
        <InputTelephone
          telephone={this.state.telephone}
          handleChange={this.handleChange}
        />

        <label>Steuernummer</label>
        <InputVatNumber
          aboutMe={this.state.aboutMe}
          handleChange={this.handleChange}
        />
        <InputSubmitButton
          vatNumber={this.state.vatNumber}
          handleChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default InputsGroup;
