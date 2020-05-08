import React from 'react'
import styled from 'styled-components'

import { Input } from '../../../../../styled-components/elements'

const Section = styled.div`
  width: auto;
`

class Ort extends React.Component {
  render() {
    return (
      <Section>
        <label htmlFor="inp" className="inp">
          <Input
            type="text"
            name="city"
            value={this.props.city}
            onChange={this.props.onInputChange}
          />
          <span className="border" />
        </label>
      </Section>
    )
  }
}

export default Ort
