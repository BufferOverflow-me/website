import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../context/authUserContext';


// Componets here
import UserImage from '../../../components/auth/widgets/userImage';
import Loading from '../../../components/animations/loading';
import Button from '../../../components/auth/widgets/button_widget';
const Index = () => {
  const { User, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !User)
      router.push('/')
  }, [User, loading, router])

  // function to delete the token from the local storage
  const deleteToken = () => {
    localStorage.removeItem('bufferoverflow-auth');
    alert('Token has been deleted!');
  }

  const userImage =() =>{
    if(User){
      return <UserImage src={User.photoUrl} />
    }
}
  return (
    <div className=''>

      {
        loading ? <Loading/> :
          // Loading animation
          
        <div className='h-screen flex flex-col items-center justify-center'>
          {/* Avatar here */}
          {userImage()}
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
