import React from 'react'
import styled from 'styled-components'

import InputOrt from './inputsAddress/InputOrt'
import InputPlz from './inputsAddress/InputPlz'
import InputStreet from './inputsAddress/InputStreet'
import InputStreetNr from './inputsAddress/InputStreetNr'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`

class InputAddress extends React.Component {
  render() {
    return (
      <section>
        <legend>Firmenadresse</legend>
        <FlexContainer>
          <label>Str. </label>
          <InputStreet
            street={this.props.street}
            onInputChange={this.props.onInputChange}
          />
          <label>Nr. </label>
          <InputStreetNr
            streetnumber={this.props.streetnumber}
            onInputChange={this.props.onInputChange}
          />
        </FlexContainer>
        <FlexContainer>
          <label>Ort </label>
          <InputOrt
            city={this.props.city}
            onInputChange={this.props.onInputChange}
          />
          <label>Plz </label>
          <InputPlz
            zipcode={this.props.zipcode}
            onInputChange={this.props.onInputChange}
          />
        </FlexContainer>
      </section>
    )
  }
}

export default InputAddress
