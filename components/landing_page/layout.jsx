import React from 'react'
import PropTypes from 'prop-types'
import Footer from './widgets/footer'

function LandingPageLayout(props) {
    return (
        <>
            {props.children}
            <Footer />
        </>
    )
}

LandingPageLayout.propTypes = {
    children: PropTypes.element
}

export default LandingPageLayout

