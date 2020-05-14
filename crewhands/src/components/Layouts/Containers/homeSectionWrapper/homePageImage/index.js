/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'

import ResponsiveImage from 'components/ResponsiveImage'
import * as Media from 'resolutions'

const bgImage = '@src/assets/images/tools_low.jpg'
const bgImageRetina = '@src/assets/images/tools_low.jpg'
const bgMobileImage = '@src/assets/images/tools_low.jpg'
const bgMobileImageRetina = '@src/assets/images/tools_low.jpg'

const HomePageImage = () => {
    return (
        <section className="home-page-image">
            <Media.Tablet>
                <ResponsiveImage
                    image={bgImage}
                    imageRetina={bgImageRetina}
                    alt="top section background"
                />
            </Media.Tablet>
            <Media.MobileLg>
                <ResponsiveImage
                    image={bgImage}
                    imageRetina={bgImageRetina}
                    alt="top section background"
                />
            </Media.MobileLg>
            <Media.MobileSm>
                <ResponsiveImage
                    image={bgMobileImage}
                    imageRetina={bgMobileImageRetina}
                    alt="top section background"
                    style={{
                        maxWidth: '576px',
                        position: 'relative',
                        width: '576px',
                        top: 0,
                    }}
                />
            </Media.MobileSm>

            <svg
                viewBox="0 0 1920 720"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
            >
                <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g id="bg-home-page" fill="#FFFFFF">
                        <polygon
                            id="svg_1"
                            points="1920 720 0 720 0 717.855348 387.106512 662.630021 774.213024 546.861629 1161.31804 516.502391 1548.42455 341.532737 1919.00364 1.00104275"
                        />
                    </g>
                </g>
            </svg>
        </section>
    )
}

export default HomePageImage
