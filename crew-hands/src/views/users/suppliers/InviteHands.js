import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import SuppliersNavigation from "../../../components/suppliers/navigation/SuppliersNavigation";

const Button = styled.button`
  background-color: #ffffff;
  border: 2px solid #0a6285;
  color: #0a6285;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
  padding: 4px 15px;
  margin-left: 10px;
  opacity: 0.8;

  @media screen and (min-width: 601px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 801px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 1111px) {
    font-size: 1.2em;
  }
`;
const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`;

class InviteHands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      ort: "",
      plz: "",
      telephone: "",
      aboutMe: "",
      vatNumber: "",

      hands: [
        {
          id: "",
          firstName: "",
          lastName: "",
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
  }
  handleChange(e) {
    this.setState({ [e.target.name]: String(e.target.value) });
  }

  render() {
    return (
      <div>
        <Header />
        <Section>
          <SuppliersNavigation />
          <h2>Invite stage-hands</h2>
          <p>Sende eine Crew-Einladung per e-Mail an:</p>
          <input
            type="email"
            id="inp"
            name="email"
            placeholder="E-Mail"
            value={this.state.email}
            onChange={this.state.handleChange}
          />
          <Button>Senden</Button>
        </Section>
      </div>
    );
  }
}

export default InviteHands;
