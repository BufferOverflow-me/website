import React from 'react'
import BackToHomeButton from '../components/error/back_to_home'
const NotFound = () => {
    return (
        <div className='flex h-screen'>
            <div className='m-auto translate-y-1/2 '>
                <div className="flex md:items-center">
                    <span className='font-bold text-4xl md:text-9xl py-10 md:p-10 text-[#4f46e5]'>404</span>
                    &nbsp;
                    <div className='py-10 grid grid-rows-3 gap-0 '>
                        <h1 className='text-3xl font-bold'>Page not found</h1>
                        <p className='mb-2'>The page you are looking for does not exist.</p>
                        {/* Buttons here */}
                        <div className="grid grid-cols-2 gap-4 h-10 text-center items-center">
                            <BackToHomeButton title="Go back Home" backgound='#4f46e5' color='#FFF' />
                            <BackToHomeButton title="Contact support" backgound='#e0e7ff' color='#000' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
