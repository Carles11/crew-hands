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
      firmname: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      address: {
        street: "",
        streetnumber: "",
        ort: "",
        plz: ""
      },
      email: "",
      telephone: "",
      vatnumber: "",
      hands: [
        {
          _id: ""
        }
      ],
      role: "supplier"
    };
    this.handleData = this.handleData.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleData(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    var address = this.state.address;
    address.street = this.state.street;
    address.streetnumber = this.state.streetnumber;
    address.ort = this.state.ort;
    address.plz = this.state.plz;
    this.setState({ address: address });
    // this.resetForm(name);
    // // this.cleanFields(elements)
  }
  handlePost = async () => {
    try {
      console.log("state", this.state)
      const response = await fetch("http://localhost:9000/api/user/supplier", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(this.state)

      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }

  resetForm(name) {

    this.setState({ [name]: "" });
  };
  // cleanFields = elements => {
  //   Array.from(elements).forEach(el => { el.value = "" }
  //   )
  // }

  render() {
    return (
      <Form onSubmit={e => {
        console.log(e)
        e.preventDefault()
        this.handlePost()
      }} >
        <h2>Job Supplier Profil</h2>
        <h3>Firmendaten</h3>

        <InputName
          firmname={this.state.firmname}
          firstname={this.state.firstname}
          username={this.state.username}
          lastname={this.state.lastname}
          onChange={this.handleData}
        />
        <InputAddress
          street={this.state.street}
          streetnumber={this.state.streetnumber}
          ort={this.state.ort}
          plz={this.state.plz}
          onChange={this.handleData}
        />
        <InputEmail email={this.state.email} onChange={this.handleData} />
        <InputTelephone
          telephone={this.state.telephone}
          onChange={this.handleData}
        />

        <InputVatNumber
          vatnumber={this.state.vatnumber}
          onChange={this.handleData}
        />
        <InputSubmitButton
          type="submit"
        />
      </Form>
    );
  }
}

export default InputsGroup;
