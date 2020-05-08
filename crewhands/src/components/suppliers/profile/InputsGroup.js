import React from 'react'
import styled from 'styled-components'

import InputName from './inputs/InputName'
import InputEmail from './inputs/InputEmail'
import InputAddress from './inputs/InputAddress'
import InputTelephone from './inputs/InputTelephone'
import InputSubmitButton from './inputs/InputSubmitButton'
import InputVatNumber from './inputs/InputVatNumber'

const Form = styled.form`
  width: 100%;
  padding-left: 20px;

  @media only screen and (min-width: 600px) {
    width: 70%;
  }
`

class InputsGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firmname: '',
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      address: {
        street: '',
        streetnumber: '',
        city: '',
        zipcode: '',
      },
      email: '',
      telephone: '',
      vatnumber: '',
      hands: [
        {
          _id: '',
        },
      ],
      role: 'supplier',
    }
    this.handleData = this.handleData.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }
  // async componentDidMount() {
  //   const promise = await API.get('schools')

  //   if (promise.success) {
  //     this.setState({ schools: promise.data })
  //   }
  // }

  handleData(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })

    var firmname = this.state.firmname
    var username = this.state.username
    var password = this.state.password
    var firstname = this.state.firstname
    var lastname = this.state.lastname
    var address = this.state.address
    address.street = this.state.street
    address.streetnumber = this.state.streetnumber
    address.city = this.state.city
    address.zipcode = this.state.zipcode
    this.setState({ address: address })
    var email = this.state.email
    var telephone = this.state.telephone
    var vatnumber = this.state.vatnumber
    var role = this.state.role
    // this.resetForm(name);
    // // this.cleanFields(elements)
    return {
      firmname,
      username,
      password,
      firstname,
      lastname,
      address,
      email,
      telephone,
      vatnumber,
      role,
    }
  }
  handlePost = async body => {
    try {
      console.log('body', body)
      const response = await fetch('http://localhost:9000/api/user/supplier', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  handleGet = async () => {
    try {
      console.log('state', this.state)
      const response = await fetch(
        'http://localhost:9000/api/user/supplier/:supplierId',
        {
          method: 'GET',
          supplierId: '_id',
        },
      )
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  resetForm(name) {
    this.setState({ [name]: '' })
  }
  // cleanFields = elements => {
  //   Array.from(elements).forEach(el => { el.value = "" }
  //   )
  // }

  render() {
    return (
      <Form
        onSubmit={e => {
          console.log(e)
          e.preventDefault()
          this.handlePost(this.handleData(e))
        }}
      >
        <h2>Job Supplier Profil</h2>
        <h3>Firmendaten</h3>

        <InputName
          firmname={this.state.firmname}
          firstname={this.state.firstname}
          username={this.state.username}
          lastname={this.state.lastname}
          onChange={this.handleData}
        />
        <InputAddress
          street={this.state.street}
          streetnumber={this.state.streetnumber}
          ort={this.state.ort}
          plz={this.state.plz}
          onInputChange={this.handleData}
        />
        <InputEmail email={this.state.email} onChange={this.handleData} />
        <InputTelephone
          telephone={this.state.telephone}
          onChange={this.handleData}
        />

        <InputVatNumber
          vatnumber={this.state.vatnumber}
          onChange={this.handleData}
        />
        <InputSubmitButton type="submit" />
      </Form>
    )
  }
}

export default InputsGroup
