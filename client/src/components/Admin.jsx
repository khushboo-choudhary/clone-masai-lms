import React, { useContext } from 'react'
import Assignments from './Admin/Assignments'
import Lectures from './Admin/Lectures'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import './styles/Admin.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const Admin = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const { userName, token, handleLogout } = useContext(AuthContext);
  console.log("token", token, userName);
  const [value, setValue] = React.useState("1");

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <div className='main'>
        <h1 className='heading'>Admin Portal</h1>
        <div>
          <Button
            id="basic-buttons"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Admin {userName}
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
      <div className='AssignmentBox'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderColor: 'divider' }}>
              <TabList onChange={handleChange} className="nav" aria-label="lab API tabs example">
                <Tab label="Add Assignments" value="1" />
                <Tab label="Add Lectures" value="2" />

              </TabList>
            </Box>
            <TabPanel className='tabPanel' value="1"><Assignments /></TabPanel>
            <TabPanel className="tabPanel" value="2"><Lectures /></TabPanel>

          </TabContext>
        </Box>

      </div>

    </>
  )
}

export default Admin

