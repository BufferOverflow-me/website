import React from 'react'
import PropTypes from 'prop-types'

const title = (props: { title: String }) => {
    return (
        <div>
            <h1 className="text-4xl md:text-4xl font-semibold leading-loose my-10 ">
                {props.title}
          </h1>
        </div>
    )
}

title.propTypes = {
    title: PropTypes.string.isRequired
}

export default title
