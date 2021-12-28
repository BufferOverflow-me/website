import React from 'react'
import PropTypes from 'prop-types'

const InputWidget = (props: { label: string; type: string | (string & {}); placeholder: string }) => {
    return (
        <div>
            <input
                aria-label={props.label}
                type={props.type}
                placeholder={props.placeholder}
                className="text-lg w-3/4 my-4
                          py-6 px-4 h-2 border-2 
                        border-[#222] dark:border-[#e9e9e9] rounded-lg mb-2"
            />
        </div>
    )
}

InputWidget.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default InputWidget
