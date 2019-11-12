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
          jobstreet={props.jobstreet}
          handleInput={props.handleInput}
        />
        <legend>Nr.</legend>
        <InputJobStreetNr
          type="number"
          jobstreetnumber={props.jobstreetnumber}
          handleInput={props.handleInput}
        />
      </Fragment>
      <Fragment>
        <legend>Ort</legend>
        <InputJobCity
          type="text"
          jobcity={props.jobcity}
          handleInput={props.handleInput}
        />
        <legend>PLZ</legend>
        <InputJobPlz
          type="number"
          jobzipcode={props.jobzipcode}
          handleInput={props.handleInput}
        />
      </Fragment>
    </section>
  );
};

export default InputJobAddress;
