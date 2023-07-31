import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = ["About", "Courts", "Reservations"];
const settings = ["Profile", "Settings", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const theme = createTheme({
    palette: {
      primary: lightGreen,
      secondary: lightGreen,
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <NavLink to="/">
          <img
            src="https://res.cloudinary.com/duy4rj4hd/image/upload/v1688680932/padel-canico/padel-logo_ngo5w0.png"
            alt="logo"
            className="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
            
          />
        </NavLink>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/courts" style={{color:"black", textDecoration:"none"}}>Courts</NavLink>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/bookings" style={{color:"black", textDecoration:"none"}}>Reservations</NavLink>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/about" style={{color:"black", textDecoration:"none"}}>About us</NavLink>
              </MenuItem>
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, color:"white" }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <NavLink to="/courts" style={{color:"white", textDecoration:"none"}}>Courts</NavLink>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <NavLink to="/bookings" style={{color:"white", textDecoration:"none"}}>Reservations</NavLink>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <NavLink to="/about" style={{color:"white", textDecoration:"none"}}>About us</NavLink>
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: { xs: 'flex'} }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/auth/signup" style={{color:"white", textDecoration:"none"}}>Signup</NavLink>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/auth/login" style={{color:"white", textDecoration:"none"}}>Login</NavLink>
              </MenuItem>
            
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://res.cloudinary.com/duy4rj4hd/image/upload/v1688507482/padel-canico/avatar_mgfpzv.jpg"
                />
              </IconButton>
            </Tooltip> */}
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;













/* import React from 'react'
import { Link } from 'react-router-dom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function NavBar() {



  return (
    <div className='nav-bar'>
    <div className='logo-and-links'>
      <img  src='https://res.cloudinary.com/duy4rj4hd/image/upload/v1688680932/padel-canico/padel-logo_ngo5w0.png' alt="logo"/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courts">Courts</Link></li>
        <li><Link to="/bookings">Book a court</Link></li>
      </ul>
      <div className='auth-links'>
      <ul>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/login">Login</Link></li>
      </ul>
      </div>
      <div className='toggle-btn'>
      <DensityMediumIcon/>
      </div>
    </div>
    </div>
  )
}

export default NavBar */
