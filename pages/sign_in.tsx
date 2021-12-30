import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authUserContext';


// Components here
import InputWidget from '../components/auth/widgets/input_widget';
import SocialButton from '../components/auth/widgets/social_buttons';
import Button from '../components/auth/widgets/button_widget';
import FormWidget from '../components/auth/widgets/form_widget';


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { signInWithEmailAndPassword, signInwithGoogle, signInwithGithub, signInwithFacebook } = useAuth();

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setError("");
    try {
      signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError("Invalid email or password");
    }
    
  };

  const google = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setError("");
    signInwithGoogle('/home');
  };

  const github = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setError("");
    signInwithGithub('/home');
  }

  const facebook = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setError("");
    signInwithFacebook('/home');
  }

  return (
    <FormWidget onSubmit={onSubmit}>

          <InputWidget label='Enter your email' placeholder='Enter your email address' type='email' onchange={(event) => setEmail(event.target.value)}  />
          <InputWidget label='Enter your password' placeholder='Password' type='password' onchange={(event) => setPassword(event.target.value)} />
          <Button title='Log in' type='submit' onClick={undefined} color={undefined}/>

          <div className='text-lg mb-5'>or</div>
          <SocialButton google={google} github={github} facebook={facebook}/>

    </FormWidget>
  );
}
