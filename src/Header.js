import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from "@mui/icons-material/Apps";
import { ArrowDropDown } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    })
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
            <MenuIcon />
        </IconButton>
        <img 
            src='https://pngimg.com/uploads/gmail_logo/small/gmail_logo_PNG1.png' 
            alt=''
        />
      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input placeholder='Search mail' type='text'/>
        <ArrowDropDown className='header_inputCaret'/>

      </div>
      <div className='header_right'>
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
      
    </div>
  )
}

export default Header
