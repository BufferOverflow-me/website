import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authUserContext';


// Components here
import InputWidget from '../components/auth/widgets/input_widget';
import SocialButton from '../components/auth/widgets/social_buttons';
import Title from '../components/auth/widgets/title';
import Button from '../components/auth/widgets/button_widget';
import FormWidget from '../components/auth/widgets/form_widget';


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
    <FormWidget onSubmit={onSubmit}>

          <InputWidget label='Enter your email' placeholder='Enter your email address' type='email' onchange={(event) => setEmail(event.target.value)}  />
          <InputWidget label='Enter your password' placeholder='Password' type='password' onchange={(event) => setPassword(event.target.value)} />
          <Button title='Log in' type='submit' />

          <div className='text-lg mb-5'>or</div>
          <SocialButton google={google} />

    </FormWidget>
  );
}
