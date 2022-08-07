import React from 'react'
import './Footer.css'
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <div className='bottom'>
        <IconButton className='replay'>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='close'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='star'>
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton  className='favorite'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='flashOn'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Footer