/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'

const ResponsiveImage = ({ image, imageRetina, alt, ...props }) => {
    return (
        <img
            srcSet={`${image} 1x, ${imageRetina} 2x`}
            src={`${image}`}
            alt={alt}
            {...props}
        />
    )
}

ResponsiveImage.propTypes = {
    image: PropTypes.string,
    imageRetina: PropTypes.string,
    alt: PropTypes.string,
}

export default ResponsiveImage
