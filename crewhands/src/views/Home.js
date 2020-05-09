import React from 'react'

import HomeTitle from '../components/home/HomeTitle'
import WhatIsCrewHands from '../components/home/WhatIsCrewHands'
import HowItWorks from '../components/home/HowItWorks'
import HomeSectionWrapper from '../components/Layouts/Containers/homeSectionWrapper/homeSectionWrapper'

const Home = () => {
    return (
        <HomeSectionWrapper>
            <HomeTitle />
            <WhatIsCrewHands />
            <HowItWorks />
        </HomeSectionWrapper>
    )
}

export default Home
