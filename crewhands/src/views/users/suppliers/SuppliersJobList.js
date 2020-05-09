import React from 'react'

import styled from 'styled-components'

import SuppliersNavigation from '../../../components/suppliers/navigation/SuppliersNavigation'
import JobList from '../../../components/suppliers/joblist/JobList'

const Section = styled.section`
    font-family: 'PetitaMedium', sans-serif;
    padding-left: 20px;
    min-height: 80vh;

    @media only screen and (min-width: 600px) {
        padding-left: 180px;
    }
`

const SuppliersJobList = () => {
    return (
        <div>
            <Section>
                <SuppliersNavigation />
                <JobList />
            </Section>
        </div>
    )
}
export default SuppliersJobList
