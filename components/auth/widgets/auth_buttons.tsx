import React from 'react'
import Link from 'next/link'
const auth_buttons = () => {
    return (
        <div>
            <div className="flex items-center gap-x-5">
                <div className="transition-all duration-700 hover:shadow-lg hover:shadow-[#23e2ce]/50 rounded-lg p-2">
                    <Link href="/sign_in" passHref>
                        Login
                    </Link>
                </div>
                <div className='bg-gradient-to-l from-[#cec1ce] to-[#23e2ce] shadow-lg shadow-[#23e2ce]/50 text-white text-2xl h-max w-max p-2 rounded-lg
                transition-all duration-700 ease-linear hover:bg-gradient-to-r'>
                    <Link href="/sign_up" passHref>
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default auth_buttons
