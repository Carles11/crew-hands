import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";

import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";

const Section = styled.section`
  max-width: 80%;
  padding-left: 20px;
`;
const InputsGroup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAddress] = useState("");
  const [hausNummer, setHausNummer] = useState("");
  const [ort, setOrt] = useState("");
  const [plz, setPlz] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => setName({ name }));
  useEffect(() => setName({ surname }));
  useEffect(() => setName({ telefon }));
  useEffect(() => setName({ email }));
  useEffect(() => setName({ adresse }));
  useEffect(() => setName({ hausNummer }));
  useEffect(() => setName({ ort }));
  useEffect(() => setName({ plz }));
  useEffect(() => setName({ bio }));

  function handleChange(e) {
    setName(e.target.name);
    setSurname(e.target.surname);
    setTelefon(e.target.telefon);
    setEmail(e.target.email);
    setAddress(e.target.adresse);
    setHausNummer(e.target.hausNummer);
    setOrt(e.target.ort);
    setPlz(e.target.plz);
    setBio(e.target.bio);
  }
  function handleSubmit() {
    return;
  }

  return (
    <Section>
      <h2>Profil</h2>
      <Form inline={true}>
        <Input
          label="Vorname"
          type="name"
          floatingLabel={true}
          required={true}
          //value={name}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;
        <Input
          label="Name"
          type="surname"
          floatingLabel={true}
          required={true}
          value={surname}
          onChange={handleChange}
        />
      </Form>
      <Form>
        <Input
          label="Telefon"
          type="telephone"
          floatingLabel={true}
          required={true}
          value={telefon}
          onChange={handleChange}
        />
        <Input
          label="E-Mail Adresse"
          type="email"
          floatingLabel={true}
          required={true}
          value={email}
          onChange={handleChange}
        />
      </Form>
      <Form inline={true}>
        <Input
          label="Adresse"
          type="adresse"
          floatingLabel={true}
          required={true}
          value={adresse}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;
        <Input
          label="Hausnummer"
          type="text"
          floatingLabel={true}
          required={true}
          value={hausNummer}
          onChange={handleChange}
        />
      </Form>
      <Form inline={true}>
        <Input
          label="Ort"
          type="city"
          floatingLabel={true}
          required={true}
          value={ort}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;
        <Input label="plz" floatingLabel={true} required={true} value={plz} />
      </Form>
      <Form>
        <Textarea
          label="Über mich"
          type="about"
          floatingLabel={true}
          required={false}
          value={bio}
          onChange={handleChange}
        />
        <Button variant="raised" onClick={handleSubmit}>
          Speichern
        </Button>
      </Form>
    </Section>
  );
};

export default InputsGroup;
