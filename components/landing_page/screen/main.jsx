import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/Home.module.scss'
const myLoader = () => {
    return `https://images.unsplash.com/photo-1503437313881-503a91226402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDF8fGRvJTIwd2hhdCUyMGlzJTIwZ3JlYXR8ZW58MHx8fHwxNjQwMDk1Mjk3&ixlib=rb-1.2.1&q=80&w=400`
  }
const main = () => {
    return (
        <div className={styles.mainSection}>
            <div className={styles.title}>
                A place to build great services.

            </div>
            <div className={styles.desc}>
            Ullam asperiores necessitatibus nisi hic ullam ad sed voluptas. Porro ut accusamus earum soluta sint nemo.
            </div>
            <button href="#">Subscribe for updates</button>
            <div className={styles.img}>
                <Image className={styles.myImage}
                src='https://images.unsplash.com/photo-1503437313881-503a91226402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDF8fGRvJTIwd2hhdCUyMGlzJTIwZ3JlYXR8ZW58MHx8fHwxNjQwMDk1Mjk3&ixlib=rb-1.2.1&q=80&w=1400'
                alt='Home Image'
                width={1200}
                height={700}
                />
            </div>
        </div>
    )
}

export default main

