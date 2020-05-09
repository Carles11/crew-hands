/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'PetitaMedium', sans-serif;
    font-size: 0.8em;

    margin-bottom: 0;
    padding-bottom: 0;
    list-style: none;

    width: 100%;
    z-index: 2;
    background-color: silber;
    color: #0a6285;
    height: 80px;
    @media only screen and (min-width: 601px) {
        flex-direction: row;

        height: 100px;
        font-size: 0.2;
    }
    @media only screen and (min-width: 801px) {
        flex-direction: row;
        height: 140px;
        font-size: 1.3em;
    }
    @media only screen and (min-width: 1111px) {
        flex-direction: row;
        height: 180px;
        font-size: 1.4em;
    }
`
const FooterItem = styled.li`
    align-self: center;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-left: 2%;
`

const Footer = () => {
    return (
        <Section>
            <FooterItem>
                <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
            </FooterItem>
            <FooterItem>
                <Link to="/impressum">Impressum</Link>
            </FooterItem>
            <FooterItem>
                <a href="https://crix.design" target="_blank">
                    &copy; CriX Design
                </a>
            </FooterItem>
        </Section>
    )
}

export default Footer
