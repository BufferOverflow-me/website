import React from 'react'
import PropTypes from 'prop-types'

const head = (props) => {
    return (
        <head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/favicon.ico" />
        </head>
    )
}

head.defaultProps = {
    title: 'BufferOverflow',
    description: 'Sass Service creator',
}

head.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default head
