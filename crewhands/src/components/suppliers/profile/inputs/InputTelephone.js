import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: auto;
`
const Input = styled.input`
  padding-left: 10px;
`

class Telephone extends React.Component {
  render() {
    return (
      <Section>
        <legend>Telefon</legend>
        <Input
          type="text"
          id="inp"
          name="telephone"
          value={this.props.telephone}
          onChange={this.props.onChange}
        />
        <span className="border" />
      </Section>
    )
  }
}

export default Telephone
