import React from 'react'
import Image from 'next/image'

import styles from '../../../styles/Home.module.scss'

const sample = () => {
    return (
        <div className={styles.sampleSection}>
           <div className={styles.content}>
                <h1 className={"font-bold"}>
                    Get the developer access now!
                    </h1>
                    <h3>
                        Using the developer access, you can access our software for testing and contribute by finding bugs and potential issues.
                    </h3>
           </div>
           <div className={styles.gif}>
               <Image
               src="https://media.istockphoto.com/photos/cyber-attack-a10-picture-id488239848"
               alt="code animation"
               width={700}
               height={500}
               />
           </div>

        </div>
    )
}

export default sample
