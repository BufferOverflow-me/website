import React from 'react'
import PropTypes from 'prop-types'

const InputWidget = (props: { label: string; type: string | (string & {}); placeholder: string }) => {
    return (
        <div>
            <input
                aria-label={props.label}
                type={props.type}
                placeholder={props.placeholder}
                className="text-sm w-3/4 my-4
                          py-5 md:py-6 px-4 h-2 border
                        border-[#222] rounded mb-2"
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
