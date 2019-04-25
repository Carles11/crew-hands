import React from "react";
import styled from "styled-components";

import InputJobCity from "./inputsAddress/InputJobCity";
import InputJobPlz from "./inputsAddress/InputJobPlz";
import InputJobStreet from "./inputsAddress/InputJobStreet";
import InputJobStreetNr from "./inputsAddress/InputJobStreetNr";

const Fragment = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputJobAddress = props => {
  return (
    <section>
      <Fragment>
        <legend>Str.</legend>
        <InputJobStreet
          type="textarea"
          name="jobStreet"
          jobStreet={props.jobStreet}
          handleInput={props.handleInput}
        />
        <legend>Nr.</legend>
        <InputJobStreetNr
          type="number"
          name="jobStreetNr"
          jobStreetNr={props.jobStreetNr}
          handleInput={props.handleInput}
        />
      </Fragment>
      <Fragment>
        <legend>Ort</legend>
        <InputJobCity
          type="text"
          name="jobCity"
          jobCity={props.jobCity}
          handleInput={props.handleInput}
        />
        <legend>PLZ</legend>
        <InputJobPlz
          type="number"
          name="jobPlz"
          jobPlz={props.jobPlz}
          handleInput={props.handleInput}
        />
      </Fragment>
    </section>
  );
};

export default InputJobAddress;
