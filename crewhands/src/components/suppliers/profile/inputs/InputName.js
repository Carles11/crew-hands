import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: auto;
`
const Input = styled.input`
  padding-left: 10px;
`

class InputName extends React.Component {
  render() {
    return (
      <Section onChange={this.props.onChange}>
        <legend>Firmenname</legend>
        <Input
          type="text"
          name="firmname"
          value={this.props.firmname}
          onChange={this.props.onChange}
        />
        <legend>Username</legend>
        <Input
          type="text"
          name="username"
          value={this.props.username}
          onChange={this.props.onChange}
        />
        <legend>Kontaktperson</legend>
        <label>Name</label>
        <Input
          type="text"
          name="firstname"
          value={this.props.firstname}
          onChange={this.props.onChange}
        />
        <label>Nachname</label>
        <Input
          type="text"
          name="lastname"
          value={this.props.lastname}
          onChange={this.props.onChange}
        />
      </Section>
    )
  }
}
export default InputName
