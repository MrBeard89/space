import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'
import React, { useState } from 'react'

export const Navbar = () => {
  const [openBtn, setOpenBtn] = useState(false)

  const handleOpenBtn = () => {
    setOpenBtn((prev) => !prev)
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
    position: 'relative',
  }

  return (
    <Box className='navbar_wrapper' sx={navbarWrapper}>
      <Box className='navbar_container' sx={navbarContainer}>
        <img src='../src/assets/shared/logo.svg' alt='logo' />
        <Box onClick={handleOpenBtn}>
          {openBtn == false ? (
            <MenuIcon
              sx={{
                color: '#D0D6F9',
                fontSize: '2.5rem',
                zIndex: '4',
              }}
            />
          ) : (
            <CloseIcon sx={{ color: '#D0D6F9', fontSize: '2.5rem' }} />
          )}
        </Box>

        <Box
          sx={{
            height: '100vh',
            width: '254px',
            position: 'absolute',
            bgcolor: 'rgba(255,255,255, 0.1)',
            top: '0',
            right: openBtn ? '0' : '-15rem',
            zIndex: '3',
            transition: 'ease-in-out 0.3s',
            backdropFilter: 'blur(25px)',
          }}
        >
          <ul>
            <li>00 Home</li>
            <li>01 Destination</li>
            <li>02 Crew</li>
            <li>03 Technology</li>
          </ul>

          <CloseIcon
            sx={{ color: '#D0D6F9', fontSize: '2.5rem' }}
            onClick={() => setOpenBtn(false)}
          />
        </Box>
      </Box>
    </Box>
  )
}
