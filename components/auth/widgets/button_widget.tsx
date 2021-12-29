import React from 'react'
import PropTypes from 'prop-types'

const button_widget = (props: { type: "button" | "submit" | "reset"; title: String | React.ReactChild | React.ReactFragment | React.ReactPortal; onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; color: string|undefined; }) => {
    return (
        <div>
            <button onClick={props.onClick}
                type={props.type}
                className="bg-green-500 shadow-lg shadow-green-500/50 w-3/4 my-4 mt-4 text-black p-2 rounded-md text-lg mb-5"
                style={{backgroundColor: props.color}}
            >
                {props.title}
            </button>
        </div>
    )
}

button_widget.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.string
}

export default button_widget
