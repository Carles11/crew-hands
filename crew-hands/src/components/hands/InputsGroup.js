import React from "react";
import styled from "styled-components";

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border: none;
`;

const InputsGroup = () => {
  return (
    <InputSection>
      <form>
        <input
          type="text"
          name="name"
          class="question"
          id="nme"
          required
          autocomplete="off"
        />
        <label for="nme">
          <span>Name</span>
        </label>
        <input
          type="text"
          name="telefon"
          class="question"
          id="nme"
          required
          autocomplete="off"
        />
        <label for="nme">
          <span>Telefon</span>
        </label>
        <input
          type="text"
          name="name"
          class="question"
          id="nme"
          required
          autocomplete="off"
        />
        <label for="nme">
          <span>E-Mail Addresse</span>
        </label>
        <textarea
          name="message"
          rows="2"
          class="question"
          id="msg"
          required
          autocomplete="off"
        />
        <label for="msg">
          <span>Proffessionelle Status?</span>
        </label>
        <input type="submit" value="Submit!" />
      </form>
    </InputSection>
  );
};

export default InputsGroup;
