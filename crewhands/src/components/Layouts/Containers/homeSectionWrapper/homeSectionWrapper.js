import React from 'react'
import PropTypes from 'prop-types'
import HomePageImage from './homePageImage'

import './homeSectionWrapper.scss'

const HomeSectionWrapper = ({ children }) => {
    return (
        <React.Fragment>
            <main className="page page_home">
                <HomePageImage />
                {children}
            </main>
        </React.Fragment>
    )
}

HomeSectionWrapper.propTypes = {
    children: PropTypes.array,
}

export default HomeSectionWrapper
