import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../context/authUserContext';

// Componets here
import Button from '../../../components/auth/widgets/button_widget';
const Index = () => {
  const { User, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !User)
      router.push('/')
  }, [User, loading, router])

  return (
    <div className='block'>

      {
        loading ?
          <div className='flex'>
            <div className='grid grid-cols-1'>Loading....</div>
          </div> :
          <div className='h-screen flex flex-col items-center justify-center'>
            <div>
              {User && <div>Congratulations {User?.email}! You are logged in.</div>}
            </div>
            <div className='w-56'>
              <Button title='Log out' onClick={signOut} type='button' color='red' />
            </div>
          </div>
      }
    </div>
  )
}

export default Index;
