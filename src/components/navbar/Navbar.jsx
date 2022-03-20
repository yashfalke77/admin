import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <IconButton color="primary" >
                        <SearchOutlinedIcon className="icon" />
                    </IconButton>
                </div>
                <div className="items">
                    <div className="item">
                        <IconButton color="primary" >
                            <LanguageOutlinedIcon className="icon" />
                        </IconButton>
                        English
                    </div>
                    <div className="item">
                        <IconButton color="primary" >
                            <FullscreenExitOutlinedIcon className="icon" />
                        </IconButton>

                    </div>
                    <div className="item">
                        <IconButton color="primary" >
                            <NotificationsNoneOutlinedIcon className="icon" />
                        </IconButton>

                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <IconButton color="primary" >
                            <ChatBubbleOutlineOutlinedIcon className="icon" />
                        </IconButton>

                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <IconButton color="primary" >
                            <ListOutlinedIcon className="icon" />
                        </IconButton>

                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar