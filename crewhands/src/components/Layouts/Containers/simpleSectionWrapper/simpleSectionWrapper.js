/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'

import './simpleSectionWrapper.scss'

const SimpleSectionWrapper = ({ children, headerTheme, className }) => {
    return (
        <React.Fragment>
            <Header
                theme={headerTheme ? `${headerTheme}-theme` : 'white-theme'}
            />
            <main className={`simple-section ${className || ''}`}>
                {children}
            </main>
        </React.Fragment>
    )
}

SimpleSectionWrapper.propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
}

export default SimpleSectionWrapper
