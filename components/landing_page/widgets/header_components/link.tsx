import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { UrlObject } from 'url'

const link = (props: { route: string | UrlObject; title: string }) => {
    return (
        <div>
            <Link href={props.route}>
                <a className="m-2 w-max hover:text-violet-400 font-light text-lg text-white h-auto">
                    {props.title}
                </a>
            </Link>
        </div>
    )
}
link.propTypes = {
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}


export default link
