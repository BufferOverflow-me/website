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
                <span className='bg-red-500 rounded-sm p-1'>
                    We are currently in the process of building the developer access.
                </span>
            </div>
            <div className={styles.gif}>
                <div className=''>
                    <Image
                        src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?crop=entropy&cs=srgb&dl=pexels-negative-space-169573.jpg&fit=crop&fm=jpg&h=426&w=640"
                        alt="code animation"
                        width={700}
                        height={500}
                        className='rounded-2xl blur-sm'
                    />
                </div>
            </div>

        </div>
    )
}

export default sample
