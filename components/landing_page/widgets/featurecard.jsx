import React from 'react'
import styles from '../../../styles/Home.module.scss'
import PropTypes from 'prop-types'
const featurecard = (props) => {
    return (
        <div className={styles.card}>
                    <div className={styles.cardTitle}>
                    <span>
                    {props.title}
                    </span>
                    </div>
                    <hr className={styles.cardHr}/>
                    <div className={styles.cardDesc}>
                        {props.desc}
                    </div>
                </div>
    );
}

featurecard.defaultProps ={
    title: 'Feature',
    desc: 'Eum quisquam voluptate quia eveniet. Nam sit voluptatem nihil.'
}

featurecard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}


export default featurecard
