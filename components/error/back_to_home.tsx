import React from 'react'
import PropTypes from 'prop-types'
const back_to_home = (props: { color: any; backgound: any; title: string | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {
    return (
        <div className='text-sm md:text-base rounded-lg p-2' style={{color:props.color, backgroundColor:props.backgound}}>
           {props.title} 
        </div>
    )
}

back_to_home.propTypes = {
    color: PropTypes.string,
    backgound: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default back_to_home
