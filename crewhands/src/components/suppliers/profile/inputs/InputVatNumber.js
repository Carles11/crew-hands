import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: auto;
`
const Input = styled.input`
  padding-left: 10px;
`

class InputVatNumber extends React.Component {
  render() {
    return (
      <Section>
        <legend>Steuernummer</legend>
        <Input
          type="text"
          name="vatnumber"
          value={this.props.vatnumber}
          onChange={this.props.onChange}
        />
      </Section>
    )
  }
}

export default InputVatNumber
