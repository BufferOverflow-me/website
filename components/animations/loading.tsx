import React from 'react'
import Image from 'next/image'
const loading = () => {
    return (
            <div className='flex h-screen justify-center items-center  '>
                <div className='border-4 flex p-3 rounded-xl gap-4 items-center'>
                    <Image src='/circle.svg' height={30} width={30} alt='' className='animate-spin rounded-full'></Image>
                    <div className='text-2xl'>
                        Loading...
                    </div>
                </div>
            </div>
    )
}

export default loading
