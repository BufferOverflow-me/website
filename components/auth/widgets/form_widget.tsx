import React from 'react'
import PropTypes from 'prop-types'

// This will wrap another component and add some functionality to it. 
const form_widget = (props: { onSubmit: React.FormEventHandler<HTMLFormElement>; children: String | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center mt-0">
            <form className="pb-8 text-center rounded-md" onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div>
    )
}

form_widget.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default form_widget
