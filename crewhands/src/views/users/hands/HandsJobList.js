import React from 'react'
import styled from 'styled-components'

import HandsNavigation from '../../../components/hands/navigation/HandsNavigation'
import JobList from '../../../components/hands/joblist/JobList'
const Section = styled.section`
  font-family: 'Raleway', sans-serif;
  min-height: 80vh;
  padding-left: 20px;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`

const HandsJobList = () => {
  return (
    <div>
      <Section>
        <HandsNavigation />
        <h2>Hands Job List</h2>
        <JobList />
      </Section>
    </div>
  )
}
export default HandsJobList
