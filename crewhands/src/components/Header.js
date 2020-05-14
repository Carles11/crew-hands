import React from 'react'
import styled from 'styled-components'

const Section = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #0a6284;
    position: absolute;
    @media screen and (min-width: 601px) {
        font-size: 1.3em;
        padding-left: 170px;
    }
    @media screen and (min-width: 801px) {
        font-size: 1.8em;
    }
    @media screen and (min-width: 1111px) {
        font-size: 2em;
    }
`
const Title = styled.h2`
    font-family: 'Lobster', cursive;
    margin: 1.3rem;
`

const Header = () => {
    return (
        <Section>
            <Title>Crew-Hands</Title>
        </Section>
    )
}

export default Header
