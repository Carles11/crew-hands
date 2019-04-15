// import React, { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";

import InputName from "./inputs/InputName";

// import Form from "muicss/lib/react/form";
// import Input from "muicss/lib/react/input";

// import Textarea from "muicss/lib/react/textarea";
// import Button from "muicss/lib/react/button";

const Section = styled.section`
  max-width: 90%;
  padding-left: 20px;
`;

const InputsGroup = () => {
  return (
    <Section>
      <h2>Profil</h2>
      <InputName />
    </Section>
  );
};

export default InputsGroup;

//   const [firstName, setFirstName] = useState("Firstname");
//   const [lastName, setLastName] = useState("");
//   const [telefon, setTelefon] = useState("");
//   const [email, setEmail] = useState("");
//   const [adresse, setAdresse] = useState("");
//   const [hausNummer, setHausNummer] = useState("");
//   const [ort, setOrt] = useState("");
//   const [plz, setPlz] = useState("");
//   const [bio, setBio] = useState("");

//   useEffect(() => setFirstName({ firstName }), [firstName]);
//   useEffect(() => setLastName({ lastName }), [lastName]);
//   useEffect(() => setTelefon({ telefon }), [telefon]);
//   useEffect(() => setEmail({ email }), [email]);
//   useEffect(() => setAdresse({ adresse }), [adresse]);
//   useEffect(() => setHausNummer({ hausNummer }), [hausNummer]);
//   useEffect(() => setOrt({ ort }), [ort]);
//   useEffect(() => setPlz({ plz }), [plz]);
//   useEffect(() => setBio({ bio }), [bio]);

//   function handleChange(e) {
//     setFirstName(e.target.firstName);
//     setLastName(e.target.lastName);
//     setTelefon(e.target.telefon);
//     setEmail(e.target.email);
//     setAdresse(e.target.adresse);
//     setHausNummer(e.target.hausNummer);
//     setOrt(e.target.ort);
//     setPlz(e.target.plz);
//     setBio(e.target.bio);
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     debugger;
//     alert(`Submitting Name ${firstName} and Surname ${lastName}`);
//   }

//   return (
//     <Section>
//       <h2>Profil</h2>
//       <label for="inp" className="inp">
//         <input
//           type="text"
//           id="inp"
//           value={firstName}
//           placeholder="&nbsp;"
//           onChange={handleChange}
//         />
//         <span className="label">Name</span>
//         <span className="border" />
//       </label>
//       <Form inline={true}>
//         <Input
//           label="Vorname"
//           type="firstName"
//           floatingLabel={true}
//           value={firstName}
//           onChange={handleChange}
//         />
//         &nbsp;&nbsp;&nbsp;
//         <Input
//           label="Name"
//           type="lastName"
//           floatingLabel={true}
//           value={lastName}
//         />
//       </Form>
//       <Form>
//         <Input
//           label="Telefon"
//           type="telephone"
//           floatingLabel={true}
//           value={telefon}
//         />
//         <Input
//           label="E-Mail Adresse"
//           type="email"
//           floatingLabel={true}
//           value={email}
//         />
//       </Form>
//       <Form inline={true}>
//         <Input
//           label="Adresse"
//           type="address"
//           floatingLabel={true}
//           value={adresse}
//         />
//         &nbsp;&nbsp;&nbsp;
//         <Input
//           label="Hausnummer"
//           type="text"
//           floatingLabel={true}
//           value={hausNummer}
//         />
//       </Form>
//       <Form inline={true}>
//         <Input label="Ort" type="city" floatingLabel={true} value={ort} />
//         &nbsp;&nbsp;&nbsp;
//         <Input label="plz" floatingLabel={true} required={true} value={plz} />
//       </Form>
//       <Form>
//         <Textarea
//           label="Über mich"
//           type="about"
//           floatingLabel={true}
//           required={false}
//           value={bio}
//         />
//         <Button variant="raised" onClick={handleSubmit}>
//           Speichern
//         </Button>
//       </Form>
//     </Section>
//   );
// };
