import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './header.scss';


import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme, setDefaultTheme } from '../redux/slices/themeSlice';
import { useEffect } from 'react';
import { useState } from 'react';






const drawerWidth = 240;


function DrawerAppBar(props) {

  useEffect(()=>{
    const savedTheme=localStorage.getItem("theme");
    if(savedTheme === "dark"){
      dispatch(setDarkTheme());
    }
    else{
      dispatch(setDefaultTheme());
    }
  }, [])

  const handleThemeToggle=()=>{
    if(theme.darkMode){
      dispatch(setDefaultTheme());
      localStorage.setItem("theme", "light")
    }
    else{
      dispatch(setDarkTheme());
      localStorage.setItem("theme", "dark")
    }
  };

  const  dispatch =useDispatch();
  const theme= useSelector((state)=>state.theme);
  const darkMode=useSelector((state)=>state.theme.darkMode);
  
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}> 
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={'/'}>
        MUI
        </Link>
      </Typography>
      <Divider />
      <List>
        <header className={darkMode ? "": "active"}>
         <ul className='active'>
         <li className='btn-theme'><button  onClick={handleThemeToggle}>click</button></li>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/about'}>About</Link></li>
           <li><Link to={'/contact'}>Contact</Link></li>
         </ul>
        </header>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;





  return (
    <header className={darkMode ? "": "active"}>
            <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <Link to={'/'}>
             MUI
          </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <ul>
            <li className='btn-theme'><button  onClick={handleThemeToggle}>click</button></li>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
    </header>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
