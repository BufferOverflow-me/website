import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../context/authUserContext';


// Components here
import InputWidget from '../components/auth/widgets/input_widget';
import SocialButton from '../components/auth/widgets/social_buttons';
import Button from '../components/auth/widgets/button_widget';
import FormWidget from '../components/auth/widgets/form_widget';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const router = useRouter();
    //error handling
    const [error, setError] = useState("");

    const { createUserWithEmailAndPassword, signInwithGoogle } = useAuth();

    const onSubmit = (event: { preventDefault: () => void; }) => {
        setError("")
        if (passwordOne === passwordTwo)
            createUserWithEmailAndPassword(email, passwordOne)
        else
            setError("Passwords do not match")
        event.preventDefault();
    };


    const google = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setError("");
        signInwithGoogle('/hello');
      };

    return (
        <FormWidget onSubmit={onSubmit}>
            <InputWidget label='Enter your email' placeholder='Enter your email address' type='email' onchange={(event) => setEmail(event.target.value)} />
            <InputWidget label='Enter your password' placeholder='Password' type='password' onchange={(event) => setPasswordOne(event.target.value)} />
            <InputWidget label='Confirm password' placeholder='Confirm Password' type='password' onchange={(event) => setPasswordTwo(event.target.value)} />
            <Button title='Log in' type='submit' />

            <div className='text-lg mb-5'>or</div>
            <SocialButton google={google} />
        </FormWidget>
    )
}

export default SignUp;

