import styles from '../../../styles/Home.module.scss'
import React from 'react'
import Featurecard from '../widgets/featurecard'

const myFeature = [
    {
        title: 'Confess',
        desc: 'A place to confess anonymously and share your feelings.'
    },
    {
        title: 'Builder',
        desc: 'A service to build your website with the best design and features.'
    },
    {
        title: 'Designer',
        desc: 'A place to enleash your ideas and share your design.'
    },
];
const feature = () => {
    return (
        <div className={styles.featureSection}>
            <h1>
                Our Products and Services
            </h1>
            <div className={styles.desc}>
                All our products and services are designed to help you grow your business.
                Right now most of them are under development, so that we can provide you with the best experience.
            </div>
            <div className={styles.grid}>
                {
                    myFeature.map((item, index)=>(
                        <Featurecard key={index} title={item.title} desc={item.desc}/>
                    ))
                }
            </div>
        </div>
    );
}


export default feature
