import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/Home.module.scss'
const myLoader = () => {
    return `https://images.unsplash.com/photo-1503437313881-503a91226402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDF8fGRvJTIwd2hhdCUyMGlzJTIwZ3JlYXR8ZW58MHx8fHwxNjQwMDk1Mjk3&ixlib=rb-1.2.1&q=80&w=400`
  }
const main = () => {
    return (
        <div className={styles.mainSection} id="main-content">
            <div className={styles.title}>
                A place to build <span>great services.</span>
            </div>
            <div className={styles.desc}>
                The best place to build, design, and unleash your ideas.
            </div>
            <button href="#">Subscribe for updates</button>
            <div className={styles.img}>

                <div className={styles.imagediv}>
                    <Image className={styles.myImage}
                    src='https://images.unsplash.com/photo-1503437313881-503a91226402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDF8fGRvJTIwd2hhdCUyMGlzJTIwZ3JlYXR8ZW58MHx8fHwxNjQwMDk1Mjk3&ixlib=rb-1.2.1&q=80&w=1400'
                    alt='Home Image'
                    width={1100}
                    height={700}
                    />
                </div>
            </div>
        </div>
    )
}

export default main

