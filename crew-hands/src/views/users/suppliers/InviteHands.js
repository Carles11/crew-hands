import React from "react";
import styled from "styled-components";
// import isEmail from "validator/lib/isEmail";

import Header from "../../../components/Header";
import SuppliersNavigation from "../../../components/suppliers/navigation/SuppliersNavigation";

const Wrapper = styled.div`
  min-height: 80vh;
`;
const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`;
const Button = styled.button`
  background-color: #ffffff;
  border: 2px solid #ffffff;
  color: #0a6285;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
  padding: 4px 15px;
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
const ButtonPosition = styled.div`
  margin-top: 10px;
`;
class InviteHands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
      error: null
    };
  }
  handleClick = () => {
    var link = `${(
      <a href="http://www.crew-hands.de">Einladung akzeptieren</a>
    )}`;
    window.open(
      `mailto:${
        this.state.items
      }?subject=Persönliche Einladung zu CREW-HANDS &body=Hallo, ich nutze Crew-Hands App um unseren Crew-Jobs besser zu organisieren und ich möchte gerne, dass du teil von unsere Crew bist. %0A%0aBitte klicke unten um die Einladung zu akzeptieren. %0A%0aGrüße! %0A%0a${link}`
    );
  };
  handleChange = evt => {
    this.setState({
      value: evt.target.value,
      error: null
    });
  };
  handleKeyDown = evt => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var value = this.state.value.trim();

      if (value && this.isValid(value)) {
        this.setState({
          items: [...this.state.items, this.state.value],
          value: ""
        });
      }
    }
  };

  handleDelete = item => {
    this.setState({
      items: this.state.items.filter(i => i !== item)
    });
  };
  handlePaste = evt => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    // eslint-disable-next-line no-useless-escape
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter(email => !this.isInList(email));

      this.setState({
        items: [...this.state.items, ...toBeAdded]
      });
    }
  };

  isValid(email) {
    let error = null;

    if (this.isInList(email)) {
      error = `${email} existiert bereits in der Empfängerliste.`;
    }

    if (!this.isEmail(email)) {
      error = `${email} ist keine gültige e-Mail Adresse.`;
    }

    if (error) {
      this.setState({ error });

      return false;
    }

    return true;
  }

  isInList(email) {
    return this.state.items.includes(email);
  }
  isEmail(email) {
    // eslint-disable-next-line no-useless-escape
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Section>
          <SuppliersNavigation />
          <h2>Stage-hands einladen</h2>
          <p>
            Sende jemand eine Einladung per e-Mail um ein Teil von deine Crew zu
            werden
          </p>
          <>
            {this.state.items.map(item => (
              <div className="tag-item" key={item}>
                {item}
                <Button
                  type="button"
                  className="button"
                  onClick={() => this.handleDelete(item)}
                >
                  &times;
                </Button>
              </div>
            ))}

            <input
              className={"input " + (this.state.error && " has-error")}
              value={this.state.value}
              placeholder="E-Mail Adressen hier schreiben oder einfügen."
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange}
              onPaste={this.handlePaste}
            />

            {this.state.error && <p className="error">{this.state.error}</p>}
          </>
          <ButtonPosition>
            <button onClick={this.handleClick}>Senden</button>
          </ButtonPosition>
        </Section>
        <Section>
          <h2>Mein Crew Team</h2>
          <p>Crew List will appear here</p>
        </Section>
      </Wrapper>
    );
  }
}

export default InviteHands;
