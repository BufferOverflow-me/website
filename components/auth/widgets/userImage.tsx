import React from 'react'
import Image from 'next/image'
const userImage = (props:{src:string})=> {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
            <Image
              src={props.src}
              width={50}
              height={50}
              className='rounded-full'
              alt='avatar'
            />
          </div>
        </div>
    )
}

// Default props
userImage.defaultProps = {
    src: '/profile.svg'
}

export default userImage
