import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
const back_to_home = (props: { color: any; backgound: any; title: string | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; url: string }) => {
    return (
        <Link href={props.url} passHref>
            <div className='select-none text-sm md:text-base rounded-lg p-2 transition-all duration-300 hover:scale-110' style={{ color: props.color, backgroundColor: props.backgound}}>
                {props.title}
            </div>
        </Link>
    )
}

back_to_home.propTypes = {
    color: PropTypes.string,
    backgound: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default back_to_home
