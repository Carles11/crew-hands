import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: auto;
`
const Input = styled.input`
  padding-left: 10px;
`
class Email extends React.Component {
  render() {
    return (
      <Section>
        <legend>E-Mail</legend>

        <Input
          type="email"
          name="email"
          value={this.props.email}
          onChange={this.props.onChange}
        />
      </Section>
    )
  }
}

export default Email
