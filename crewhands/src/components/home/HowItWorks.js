import React from 'react'
import styled from 'styled-components'
import img from '../../assets/images/theater-truss.jpg'
import wide from '../../assets/images/stage-light.jpg'
import GraphicLeft from '../../assets/images/graphics/homeL.jpg'
import GraphicCenter from '../../assets/images/graphics/HOME2.jpg'
import GraphicRight from '../../assets/images/graphics/HOME3.jpg'
import KontoEinlegenButton from './KontoEinlegenButton'

const Section = styled.section`
  font-family: 'Raleway', sans-serif;
  text-align: center;
  height: auto;
  width: auto;
  color: white;
  padding-top: 1px;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  background-attachment: scroll;
  background-attachment: fixed;

  @media screen and (min-width: 601px) {
    padding-top: 10px;
    padding-bottom: 8px;
    font-size: 1.3em;
  }
  @media screen and (min-width: 801px) {
    background-position: top;
    background-image: url(${wide});
    padding-top: 20px;
    padding-bottom: 17px;
    font-size: 1.5em;
    height: auto;
  }
  @media screen and (min-width: 1111px) {
    padding-top: 40px;
    padding-bottom: 28px;
    font-size: 2rem;
    height: auto;
  }
`

const Title = styled.h3`
  padding: 20px 10px;
  font-size: 2em;
  line-height: 1;
`
const Paragraph = styled.p`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 25px;
  max-width: 95%;
  margin: auto;
  line-height: 1.7;
  justify-self: center;
`

const FlexContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  margin: 4rem auto;
  padding: 7rem;
  justify-content: space-around;
`
const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FoodLabel = styled.p`
  color: grey;
  text-align: center;
`

const HowItWorks = () => {
  return (
    <Section>
      <Title>Wie es funktioniert</Title>
      <FlexContainer>
        <FlexItem>
          <img
            src={GraphicLeft}
            height="105px"
            width="105px"
            alt="Logo of CriX web development javascript"
          />
          <FoodLabel>Job einstellen</FoodLabel>
        </FlexItem>
        <FlexItem>
          <img
            src={GraphicCenter}
            height="105px"
            width="105px"
            alt="Logo of CriX web development javascript"
            r
          />
          <FoodLabel>Anfragen erhalten </FoodLabel>
        </FlexItem>
        <FlexItem>
          <img
            src={GraphicRight}
            height="105px"
            width="105px"
            alt="Logo of CriX web development javascript"
          />
          <FoodLabel>Job veranstalten</FoodLabel>
        </FlexItem>
      </FlexContainer>
      <Paragraph>
        Als Crew-Director meldest du erst deine Firma von Technikern- und
        Stage-Handsvermittlung an. Nur du kannst Personal zu deinen Team
        einladen.
      </Paragraph>
      <Paragraph>
        Wenn sie die Einladung akzeptieren sind sie schon ein teil deines Teams.
        Wenn ein neuen Job bei dir eintrift wählst du die Profis, die das
        Angebot erhalten sollten. Ihnen allen stehen jetzt alle Daten und nötige
        Dokumente für den Job zur Hand.
      </Paragraph>
      <Paragraph>
        Jeder hat die gleiche Infos und du erstellst per Knopfdruck ein Dokument
        mit alle Job Infos und auch die Daten deine Crew, die du an deine Kunde
        mühelos weiterschicken kannst. Er ist Glücklich, weil Ihr organisiert
        seid. Du bist Glücklich, weil es stimmt. Den Rest übernehmen deine
        Jungs.
      </Paragraph>
      <KontoEinlegenButton />
    </Section>
  )
}

export default HowItWorks
