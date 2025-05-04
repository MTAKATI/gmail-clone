import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import {useForm} from "react-hook-form";
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db, serverTimestamp } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    try {
      await addDoc(collection(db, 'emails'), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      dispatch(closeSendMessage());
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h3>New Message</h3>
        <CloseIcon 
            onClick={() => dispatch(closeSendMessage())}
            className='sendMail_close' 
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            {...register('to', {required: true})}
            placeholder='To' 
            type='text' 
        />
        {errors.to && <p className='sendMail_error'>To is Required!</p>}

        <input 
            {...register('subject', {required: true})}
            placeholder='Subject' 
            type='text' 
        />
        {errors.subject && <p className='sendMail_error'>Subject is Required!</p>}

        <input 
            {...register('message', {required: true})}
            placeholder='Message' 
            type='text' 
            className='sendMail_message' 
        />
        {errors.message && <p className='sendMail_error'>Message is Required!</p>}

        <div className='sendMail_options'>
            <Button 
                className='sendMail_send'
                variant="contained"
                color= "primary"
                type="submit"
            >Send</Button>
        </div>
      </form>

    </div>
  ); 
}

export default SendMail
