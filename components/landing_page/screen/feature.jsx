import styles from '../../../styles/Home.module.scss'
import React from 'react'
import Featurecard from '../widgets/featurecard'

const myFeature = [
    {
        title: 'Feature',
        desc: 'Eum quisquam voluptate quia eveniet. Nam sit voluptatem nihil.'
    },
    {
        title: 'Feature',
        desc: 'Eum quisquam voluptate quia eveniet. Nam sit voluptatem nihil.'
    },
    {
        title: 'Feature',
        desc: 'Eum quisquam voluptate quia eveniet. Nam sit voluptatem nihil.'

    },
    {
        title: 'Feature',
        desc: 'Eum quisquam voluptate quia eveniet. Nam sit voluptatem nihil.'
    },
    {
        title: 'Feature',
        desc: 'Eum quisquam voluptate quia eveniet. Nam sit voluptatem nihil.'
    },
];
const feature = () => {
    return (
        <div className={styles.featureSection}>
            <h1>
                All the feature you want
            </h1>
            <div className={styles.desc}>
                Ullam asperiores necessitatibus nisi hic ullam ad sed voluptas. Porro ut accusamus earum soluta sint nemo. Animi blanditiis exercitationem quisquam. Laudantium est ea corrupti.
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
