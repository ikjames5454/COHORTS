import React,{ useState }  from 'react'
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ham from "../../asset/Image/hamburger.png"
import { useNavigate } from 'react-router-dom';
import logo from "../../asset/Image/logo.png"



const Nav = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const navigate = useNavigate();



  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => { 
    setAnchorEl(event.currentTarget as HTMLElement); 
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    console.log(option + ' clicked');
    handleMenuClose();
  };

  const handleClick = (index: number) => {
    setActiveButton(index);
    switch(index) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/workspace');
        break;
      case 2:
        navigate('/resources');
        break;
      default:
        break;
    }
  };
  return (
    <AppBar position='static' color='default' style={{height:"70px"}} >
    <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
      <img src={logo} alt='comany-logo' className='flex md:flex w-10' />
      <Typography variant='h6' sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700, 
        color: 'inherit',
        textDecoration: 'none',
        fontSize:"30px",
        ml:2
        }}
      >
        enum
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', mr: 2, gap: 8}}> 
        <Button
          variant="text" 
          sx={{ 
            color: activeButton === 0 ? '#008EEF' : 'black', 
            borderBottom: activeButton === 0 ? '4px solid #008EEF' : 'none',
            textTransform: 'none',
            '&:hover': {                 
              color: '#008EEF'
            },
            fontSize: 23,
            fontWeight: 600,
            lineHeight: '27px', 
            borderRadius: 1,
            fontFamily: 'DM Sans'
          }}
            onClick={() => handleClick(0)}  
            className="text-base font-bold"
          >
          Home
        </Button>

        <Button 
          variant="text" 
          sx={{ 
            color: activeButton === 1 ? '#008EEF' : 'black', 
            borderBottom: activeButton === 1 ? '4px solid #008EEF' : 'none',
            textTransform: 'none',
            '&:hover': { 
              color: '#008EEF'
            },
            fontSize: 23,
            fontWeight: 600,
            lineHeight: '27px',
            fontFamily: 'DM Sans' 
          }}
            onClick={() => handleClick(1)}  
            className="text-base font-bold"
        >
          Workspace
        </Button> 
          
        <Button 
          variant="text" 
          sx={{ 
            color: activeButton === 2 ? '#008EEF' : 'black', 
            borderBottom: activeButton === 2 ? '4px solid #008EEF' : 'none',
            textTransform: 'none',
            '&:hover': { 
            color: '#008EEF'
            },
            fontSize: 23,
            fontWeight: 600,
            lineHeight: '27px',
            fontFamily: 'DM Sans'
          }}
            onClick={() => handleClick(2)}  
            className="text-base font-bold"
          >
            Resources Library
        </Button>
      </Box>

        <div className='flex md:flex md:flex-row gap-8'>
          <IconButton sx={{ p: 0, ml: 2}}>
            <NotificationsNoneOutlinedIcon sx={{fontSize:"2.5rem"}}/>
          </IconButton> 

          <Avatar src="/broken-image.jpg" style={{color: '#008EEF'}} sx={{display: 'flex'}}/>

          <Button
            variant="text"
            onClick={handleMenuClick}
            sx={{ 
            display: { xs: 'none', md: 'flex' },
            textTransform: 'none',
            color: 'black' ,
           
            }}
             endIcon={<p className=' font-extrabold'><ExpandMoreIcon/></p> }
          >
           <p className='p text-2xl'>Onomowano</p> 
          </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleMenuItemClick('Option 1')}>Button 1</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Option 2')}>Button 2</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Option 3')}>Button 3</MenuItem>
            </Menu>

            <div style={{ display: { xs: 'none', md: 'block' } as any }}  >
              { isMobile || <img src={ham} alt="hamburger" />}
            </div>
        </div>          
        

    </Toolbar>
  </AppBar> 
  )
}

export default Nav