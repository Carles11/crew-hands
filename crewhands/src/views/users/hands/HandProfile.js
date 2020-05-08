import React from 'react'
import styled from 'styled-components'

import HandsNavigation from '../../../components/hands/navigation/HandsNavigation'
import HandsProfileForm from '../../../components/hands/profile/HandsProfileForm'

const Section = styled.section`
  font-family: 'Raleway', sans-serif;
  padding-left: 20px;
  min-height: 80vh;
`
const HandProfile = () => {
  return (
    <div>
      <Section>
        <HandsNavigation />
        <HandsProfileForm />
      </Section>
    </div>
  )
}

export default HandProfile
