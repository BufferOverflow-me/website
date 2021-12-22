import React from 'react'
import PropTypes from 'prop-types'
import Footer from './widgets/footer'
import Head from '../head'
function LandingPageLayout(props) {
    return (
        <>
            <Head />
            {props.children}
            <Footer />
        </>
    )
}

LandingPageLayout.propTypes = {
    children: PropTypes.element
}

export default LandingPageLayout

