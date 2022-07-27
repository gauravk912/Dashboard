import React from 'react';
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className="icon"/>
          </div>
          <div className='item'>
            <ListOutlinedIcon className="icon" />
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className='item'>
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWhonqfBjNOMAjzWSpStiDLkBJ7Lym09PwQ&usqp=CAU" alt="" className="avatar" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar