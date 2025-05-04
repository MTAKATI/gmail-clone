import React from 'react';
import './Login.css';
import { login } from './features/userSlice';
import {auth, provider} from './firebase';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';

function Login() { 
  const dispatch = useDispatch();


  const signIn = () => {
    signInWithPopup(auth, provider)
        .then(({user}) => {
            dispatch
                (login({
                    displayName: user.displayName,
                    email:user.email,
                    photoUrl:user.photoURL
                })
            );
        })
        .catch((error) => alert(error.message))
  };

  return (
    <div className='login'>
      <div className='login_container'>
        <img 
            src='https://pngimg.com/uploads/gmail_logo/gmail_logo_PNG1.png'
            alt=''
        />
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

export default Login
