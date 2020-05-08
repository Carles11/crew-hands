import React from 'react'
import styled from 'styled-components'

import { Input } from '../../../../../styled-components/elements'

const Section = styled.div`
  width: auto;
`

class InputStreet extends React.Component {
  render() {
    return (
      <Section className="inp">
        <Input
          type="text"
          name="street"
          value={this.props.street}
          onChange={this.props.onInputChange}
        />
        <span className="border" />
      </Section>
    )
  }
}

export default InputStreet
