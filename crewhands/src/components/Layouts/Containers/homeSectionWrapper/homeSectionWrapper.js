import React from 'react'
import PropTypes from 'prop-types'
import HomePageImage from './homePageImage'

import './homeSectionWrapper.scss'

const HomeSectionWrapper = ({ children }) => {
    return (
        <>
            <main className="page page_home">
                <HomePageImage />
                {children}
            </main>
        </>
    )
}

HomeSectionWrapper.propTypes = {
    children: PropTypes.array,
}

export default HomeSectionWrapper
