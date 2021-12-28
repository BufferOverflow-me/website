import React from 'react'
import PropTypes from 'prop-types'

const button_widget = (props: { type: "button" | "submit" | "reset"; title: String | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {
    return (
        <div>
            <button
                type={props.type}
                className="bg-green-400 w-3/4 my-4 mt-4 text-black p-2 rounded-md text-lg mb-5"
            >
                {props.title}
            </button>
        </div>
    )
}

button_widget.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default button_widget
