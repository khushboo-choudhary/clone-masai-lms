import React, { useContext } from 'react'
import logo from '../images/Masai.png'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const { userName, handleLogout } = useContext(AuthContext);

    // Popup Menu Bar open
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Popup Menu Bar close
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Logout button
    const Logout = () => {
        handleLogout()
        navigate('/')
    }

    return (
        <>
            <div>
                <div className='topBox'>

                    {/* Masai Logo Added */}
                    <div className='masaiLogo'>
                        <img src={logo} alt="" className='logo' onClick={() => { navigate('/LandingPage') }} />

                    </div>

                    <div className='categoryBoxes'>
                        {/* Category Items Added */}
                        <div className="boxes" onClick={() => { navigate('/Lectures') }}>Lectures</div>
                        <div className="boxes" onClick={() => { navigate('/Assignments') }}>Assignments</div>
                        <div className="boxes" onClick={() => { navigate('/Quizzes') }}>Quizzes</div>
                        <div className="boxes" onClick={() => { navigate('/Tickets') }}>Tickets</div>
                        <div className="boxes" onClick={() => { navigate('/Discussions') }}>Discussions</div>
                        <div className="boxes" onClick={() => { navigate('/Notifications') }}>Notifications</div>
                        <div className="boxes" onClick={() => { navigate('/Electives') }}>Electives</div>
                        <div className="boxes" onClick={() => { navigate('/Courses') }}>Courses</div>
                    </div>
                    <div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {userName}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={Logout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar