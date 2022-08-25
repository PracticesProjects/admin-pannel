import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
import {NotificationsIcon} from '@mui/icons-material'


export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>E-Dailo</span>
        </div>
        <div className='topright'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBag'>3</span>
          </div>
        </div>
        <div className='topright'>
          <div className='topbarIconContainer'>
            <Language />
          </div>
        </div>
        <div className='topright'>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
        </div>
        <img
          src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
          className='topAvatar'
        />
      </div>
    </div>
  )
}
