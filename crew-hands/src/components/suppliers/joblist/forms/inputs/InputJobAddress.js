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
          name="jobstreet"
          jobStreet={props.jobstreet}
          handleInput={props.handleInput}
        />
        <legend>Nr.</legend>
        <InputJobStreetNr
          type="number"
          name="jobstreetnumber"
          jobStreetNr={props.jobstreetnumber}
          handleInput={props.handleInput}
        />
      </Fragment>
      <Fragment>
        <legend>Ort</legend>
        <InputJobCity
          type="text"
          name="jobcity"
          jobCity={props.jobcity}
          handleInput={props.handleInput}
        />
        <legend>PLZ</legend>
        <InputJobPlz
          type="number"
          name="jobplz"
          jobPlz={props.jobplz}
          handleInput={props.handleInput}
        />
      </Fragment>
    </section>
  );
};

export default InputJobAddress;
