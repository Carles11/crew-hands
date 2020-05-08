import React from 'react'
import styled from 'styled-components'

import SuppliersNavigation from '../../../components/suppliers/navigation/SuppliersNavigation'

const Section = styled.section`
  font-family: 'Raleway', sans-serif;
  padding-left: 20px;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`
const Button = styled.button`
  margin: 10px;
`
const SuppliersContact = () => {
  return (
    <div>
      <Section>
        <SuppliersNavigation />
        <h2>Kontakt</h2>
        <legend>
          Wenn du fragen über die Funktionsweise diesen App hast, klicke bitte
          auf den Knopf unten und schreib uns an:
        </legend>
        <Button>Kontakt</Button>
      </Section>
    </div>
  )
}

export default SuppliersContact
