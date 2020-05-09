/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'

import * as RB from 'react-bootstrap'
import Header from 'components/Header/Header'
import WavyPageTitleWrapper from 'components/Sections/WavyPageTitle/WavyPageTitle'

import './registraionSectionWrapper.scss'

const bgImage = '/images/background-elements/top-page/top-auth-bg.jpg'
const bgImageRetina = '/images/background-elements/top-page/top-auth-bg@2x.jpg'

const RegistraionSectionWrapper = ({
    children,
    theme,
    pageTitle,
    pageSubtitle,
}) => {
    return (
        <React.Fragment>
            <Header theme={theme ? `${theme}-theme` : 'white-theme'} />

            <main className="auth wavy-section">
                <WavyPageTitleWrapper
                    bgImage={bgImage}
                    bgImagePosition="right"
                    bgImageRetina={bgImageRetina}
                    className="auth_image"
                />
                <section className="top-section ">
                    <RB.Container>
                        <RB.Row>
                            <RB.Col
                                xs={12}
                                sm={12}
                                md={{ span: 10, offset: 1 }}
                                lg={{ span: 10, offset: 1 }}
                            >
                                {pageTitle && (
                                    <h1 className="page-title h2">
                                        {pageTitle}
                                    </h1>
                                )}
                                {pageSubtitle && <p>{pageSubtitle}</p>}
                            </RB.Col>
                        </RB.Row>
                    </RB.Container>
                </section>
                {children}
            </main>
        </React.Fragment>
    )
}

RegistraionSectionWrapper.propTypes = {
    theme: PropTypes.string,
    pageTitle: PropTypes.string,
    pageSubtitle: PropTypes.string,
}

export default RegistraionSectionWrapper
