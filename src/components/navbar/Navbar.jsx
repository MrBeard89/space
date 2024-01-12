import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import '../../styles/Navbar/Navbar.css'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  //Styles

  const navbarWrapper = {
    width: '100vw',
    zIndex: '3',
    display: 'block',
    position: ' fixed',
    top: '0',
    mb: '4rem',
  }

  const navbarContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: '1rem',
  }

  return (
    <Box className='navbar_wrapper' sx={navbarWrapper}>
      <Box className='navbar_container' sx={navbarContainer}>
        <img src='../src/assets/shared/logo.svg' alt='logo' />
        <Box onClick={handleOpen}>
          {open == false ? (
            <MenuIcon
              sx={{
                color: '#D0D6F9',
                fontSize: '2.5rem',
              }}
            />
          ) : (
            <CloseIcon sx={{ color: '#D0D6F9', fontSize: '2.5rem' }} />
          )}
        </Box>
      </Box>
    </Box>
  )
}
