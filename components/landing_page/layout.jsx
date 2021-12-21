import React from 'react'
import PropTypes from 'prop-types'
import Header from './widgets/header'
import Footer from './widgets/footer'

function LandingPageLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

LandingPageLayout.propTypes = {
    children: PropTypes.element
}

export default LandingPageLayout

