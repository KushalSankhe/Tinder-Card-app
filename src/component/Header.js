import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import './header.css'
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function header() {
  return (
    <div className='tinder-header'>
        <IconButton>
            <PersonIcon className='header-icons' fontSize='large'  />
        </IconButton >
        <img  className='tinder-img' src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' fontSize='large'></img>
        <IconButton >
            <ForumIcon className='header-icons' fontSize='large'  />
        </IconButton >
    </div>
  )
}

export default header