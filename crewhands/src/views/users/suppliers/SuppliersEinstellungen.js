import React from 'react'
import styled from 'styled-components'

import SuppliersNavigation from '../../../components/suppliers/navigation/SuppliersNavigation'

const Section = styled.section`
    font-family: 'PetitaMedium', sans-serif;
    padding-left: 20px;
    min-height: 80vh;

    @media only screen and (min-width: 600px) {
        padding-left: 180px;
    }
`
const Button = styled.button`
    max-width: 100px;
`

const SuppliersEinstellungen = () => {
    return (
        <div>
            <Section>
                <SuppliersNavigation />
                <h2>Stage-hand Einstellungen</h2>
                <section>
                    <label>Anmeldedaten</label>
                    <legend>Username:</legend>USERNAME <Button> ändern</Button>
                    <legend>Password:</legend>PASSWORD <Button> ändern</Button>
                    <legend>E-Mail:</legend>E-MAIL <Button> ändern</Button>
                </section>
                <section>
                    <label>Weitere Profiledaten</label>
                    <button> bearbeiten</button>
                </section>
            </Section>
        </div>
    )
}
export default SuppliersEinstellungen
