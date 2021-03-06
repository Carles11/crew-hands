import React from 'react'
import styled from 'styled-components'

import SliderButton from './SliderButton'

const Sliders = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-top: 40px;
`
const SubTitle = styled.h2`
    font-family: 'PetitaMedium', sans - serif;
    padding-left: 20px;
    padding-top: 40px;
`
const Label = styled.label`
    font-family: 'PetitaMedium', sans-serif;
    font-size: 1.1em;
    padding-right: 5px;
    padding-left: 15px;
`
const Buttons = styled.div`
    display: flex;
`
const Insurance = () => {
    return (
        <div>
            <SubTitle>Deckung</SubTitle>

            <Sliders>
                <Buttons>
                    <Label>Allgemein nur versicherte Hands anzeigen</Label>
                    <SliderButton />
                </Buttons>
            </Sliders>
        </div>
    )
}

export default Insurance
