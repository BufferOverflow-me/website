import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authUserContext';


// Components here
import InputWidget from '../components/auth/widgets/input_widget';
import SocialButton from '../components/auth/widgets/social_buttons';
import Title from '../components/auth/widgets/title';
import Button from '../components/auth/widgets/button_widget';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword, signInwithGoogle } = useAuth();

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setError(null);
    signInWithEmailAndPassword(email, password);
  };

  const google = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setError(null);
    signInwithGoogle('/hello');
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center m-6">
        <form className="pb-8 text-center rounded-md ">
          
          <InputWidget label='Enter your email' placeholder='Enter your email address' type='email' />
          <InputWidget label='Enter your password' placeholder='Password' type='password' />
          <Button title='Log in' type='submit'/>

          <div className='text-lg mb-5'>or</div>
          <SocialButton google={google} />
        </form>
      </div>
    </>
  );
}
