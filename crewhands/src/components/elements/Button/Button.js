/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import * as RB from 'react-bootstrap'
import './buttons.scss'

const generateLinkClass = (size, variant, block) => {
    return `btn${block ? ' btn-block' : ''}${size ? ` btn-${size}` : ''}${
        variant ? ` btn-${variant}` : ''
    }`
}

const Button = ({
    className,
    children,
    size,
    variant,
    block,
    bsPrefix,
    onClick,
    elementType,
    pathLink,
    ...other
}) => {
    switch (elementType) {
        case 'Link':
            return (
                <Link
                    {...other}
                    to={pathLink}
                    onClick={onClick}
                    className={
                        (typeof className !== 'undefined'
                            ? `${className} `
                            : '') + generateLinkClass(size, variant, block)
                    }
                >
                    {children}
                </Link>
            )
        case 'href':
            return (
                <a
                    href={pathLink}
                    {...other}
                    className={
                        (typeof className !== 'undefined'
                            ? `${className} `
                            : '') + generateLinkClass(size, variant, block)
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            )
        default:
            return (
                <button
                    {...other}
                    className={className}
                    type={elementType}
                    size={size}
                    variant={variant}
                    block={block}
                    bsPrefix={bsPrefix}
                    onClick={onClick}
                >
                    {children}
                </button>
            )
    }
}

Button.propTypes = {
    elementType: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
    bsPrefix: PropTypes.string,
    block: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button
