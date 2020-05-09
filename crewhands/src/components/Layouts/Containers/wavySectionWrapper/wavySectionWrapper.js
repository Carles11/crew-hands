/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'

import './wavySectionWrapper.scss'

const WavySectionWrapper = ({
    children,
    color,
    theme,
    vertical,
    verticalCheck,
    bgImage,
    insideFormSteps,
}) => {
    const mainClassNames = ['wavy-section', `wavy-section-${color || 'white'}`]
    if (bgImage) {
        mainClassNames.push('wavy-section-img')
    }
    if (insideFormSteps) {
        mainClassNames.push('inside-form-steps')
    }
    if (vertical) {
        mainClassNames.push('wavy-section-vertical')
    }
    if (verticalCheck) {
        mainClassNames.push('wavy-section-vertical-check')
    }

    return (
        <React.Fragment>
            <Header theme={theme ? `${theme}-theme` : 'white-theme'} />
            <main className={mainClassNames.join(' ')}>{children}</main>
        </React.Fragment>
    )
}

WavySectionWrapper.propTypes = {
    children: PropTypes.array,
    insideFormSteps: PropTypes.bool,
    theme: PropTypes.string,
    color: PropTypes.string,
    bgImage: PropTypes.bool,
    vertical: PropTypes.bool,
}

export default WavySectionWrapper
