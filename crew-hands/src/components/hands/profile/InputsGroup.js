import React from "react";
import styled from "styled-components";

import InputName from "./inputs/InputName";
import InputEmail from "./inputs/InputEmail";
import InputAddress from "./inputs/InputAddress";
import InputOrtPlz from "./inputs/InputOrtPlz";
import InputTelephone from "./inputs/InputTelephone";
import InputAboutMe from "./inputs/InputAboutMe";
import InputSubmitButton from "./inputs/InputSubmitButton";

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
      aboutMe: "",
      users: [
        {
          firstName: "",
          lastName: "",
          userName: "",
          address: "",
          email: "",
          ort: "",
          plz: "",
          telephone: "",
          aboutMe: ""
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
    const { firstName, lastName, users } = this.state;
    alert(
      `Incorporated: ${firstName} ${lastName} to users list. ${
        users.length
      } users on that list`
    );
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Stage-Hand Profil</h2>
        <InputName
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          userName={this.state.userName}
          users={this.state.users}
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
        <InputAboutMe
          aboutMe={this.state.aboutme}
          handleChange={this.handleChange}
        />
        <InputSubmitButton />
      </Form>
    );
  }
}

export default InputsGroup;
