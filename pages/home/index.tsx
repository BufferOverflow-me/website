import { useTheme } from 'next-themes'
import { useAuth } from '../../context/authUserContext';
import Image from 'next/image';

// COmponents here
import UserImage from '../../components/auth/widgets/userImage';
export default function Home() {
  const { User } = useAuth();
  const { theme, setTheme } = useTheme();

  // A dashboard for the user
  return (
    <div className=''>
      <div className='w-screen py-10 drop-shadow-lg bg-gray-200 dark:bg-gray-700'>
        <div className='mx-64 justify-between  flex items-center '>
          <div className='font-semibold text-2xl text-gray-600 dark:text-gray-50'>
            Hi, {User.name}
          </div>
          <div className='rounded-full flex items-center gap-10'>
            {/* A moon iconed button that will change the theme */}
            <button
              className='w-12 h-12 rounded-full'
              type='button'
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Image src={theme === 'light' ? '/svgs/light_moon.svg' : '/svgs/dark_moon.svg'} width={50} height={50} alt='Theme toogle' />
            </button>

            {<UserImage src={User.photoUrl} />}
          </div>
        </div>
      </div>
      {/* Home Section */}
      <div className='h-screen'>
        <div className='mt-10 mx-72 h-1/5 bg-gray-300 dark:bg-gray-700 shadow-2xl shadow-slate-500/50 dark:shadow-slate-400/25 rounded-2xl flex justify-center items-center text-2xl text-center'>
          We are under development.
          <br />
          Sorry for Incovinience.
        </div>
      </div>
    </div>
  )
}
