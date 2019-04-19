import React from "react";
import styled from "styled-components";

import InputName from "./inputs/InputName";
import InputEmail from "./inputs/InputEmail";
import InputAddress from "./inputs/InputAddress";
import InputOrtPlz from "./inputs/InputOrtPlz";
import InputTelephone from "./inputs/InputTelephone";
import InputBranche from "./inputs/InputBranche";
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
      firstName: "",
      lastName: "",
      userName: "",
      address: "",
      email: "",
      ort: "",
      plz: "",
      telephone: "",
      branche: "",
      vatNumber: "",

      hands: [
        {
          firstName: "",
          lastName: "",
          userName: "",
          address: "",
          email: "",
          ort: "",
          plz: "",
          telephone: "",
          branche: "",
          vatNumber: ""
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: String(e.target.value) });
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
        <InputName
          firmName={this.state.firmName}
          contactName={this.state.contactName}
          hands={this.state.hands}
          handleChange={this.handleChange}
        />
        <InputAddress
          address={this.state.address}
          handleChange={this.handleChange}
        />
        <InputOrtPlz
          ort={this.state.ort}
          plz={this.state.plz}
          handleChange={this.handleChange}
        />
        <InputEmail email={this.state.email} handleChange={this.handleChange} />
        <InputTelephone
          telephone={this.state.telephone}
          handleChange={this.handleChange}
        />
        <InputBranche
          branche={this.state.branche}
          handleChange={this.handleChange}
        />
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
