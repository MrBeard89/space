import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { SpaceContext } from '../../context/SpaceContext'

import { styles } from './navbar.style'
import { COLORS } from '../../constants/colors'
import { SIZES } from '../../constants/sizes'

export const Navbar = () => {
  const { openBtn, handleOpenBtn, setOpenBtn, isMobile, setIsMobile } = useContext(SpaceContext)
  return (
    //Navbar wrapper
    <Box sx={styles.navbarWrapper}>
      {/* Home container */}
      <Box sx={styles.navbarContainer}>
        {/* Main icon */}
        <Link to='/home'>
          <img src='../src/assets/shared/logo.svg' alt='logo' />
        </Link>

        {/* Hamburger mobile icon */}
        <Box onClick={handleOpenBtn}>
          {openBtn == false ? <MenuIcon sx={styles.hamburger} /> : ''}
        </Box>

        {/* Navlinks container */}
        <Box sx={[styles.navlinksContainer, { right: openBtn ? '0' : '-17rem' }]}>
          <Box sx={styles.lineContainer}>
            <hr
              style={{
                height: '1px',
                width: '480px',
                backgroundColor: COLORS.line,
                border: 'none',
                position: 'absolute',
              }}
            />
          </Box>
          {/* Links */}
          <List sx={styles.navlinksContainer.navlinksList}>
            {/* Home */}
            <Link to='/home' style={{ textDecoration: 'none' }} onClick={() => setOpenBtn(false)}>
              <ListItem
                sx={[
                  {
                    width: { xs: SIZES.navbar_mobile_width, sm: '100%' },
                    height: { xs: SIZES.navbar_mobile_height, sm: '20px' },
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: COLORS.main_white,
                  },

                  {
                    '&:hover': {
                      cursor: 'pointer',
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '-1.5rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '-1.5rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontWeight: '500',
                      position: 'relative',
                      left: '1.5rem',
                      fontSize: { xs: '1.1rem' },
                      display: { sm: 'none', lg: 'inline-block' },
                    }}
                  >
                    00
                  </Typography>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '0.9rem' },
                      position: 'relative',
                      left: '2.6rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Home
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>

            {/* Destination */}
            <Link
              to='/destination'
              style={{ textDecoration: 'none' }}
              onClick={() => setOpenBtn(false)}
            >
              <ListItem
                sx={[
                  {
                    width: { xs: SIZES.navbar_mobile_width, sm: '100%' },
                    height: { xs: SIZES.navbar_mobile_height, sm: '20px' },
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: COLORS.main_white,
                  },

                  {
                    '&:hover': {
                      cursor: 'pointer',
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '0.4rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '0.4rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontWeight: '500',
                      position: 'relative',
                      left: '1.5rem',
                      fontSize: { xs: '1.1rem' },
                      display: { sm: 'none', lg: 'inline-block' },
                    }}
                  >
                    01
                  </Typography>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '0.9rem' },
                      position: 'relative',
                      left: '2.8rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Destination
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>

            {/* Crew */}
            <Link to='/crew' style={{ textDecoration: 'none' }} onClick={() => setOpenBtn(false)}>
              <ListItem
                sx={[
                  {
                    width: { xs: SIZES.navbar_mobile_width, sm: '100%' },
                    height: { xs: SIZES.navbar_mobile_height, sm: '20px' },
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: COLORS.main_white,
                  },

                  {
                    '&:hover': {
                      cursor: 'pointer',
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '-1.3rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '-1.3rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontWeight: '500',
                      position: 'relative',
                      left: '1.5rem',
                      fontSize: { xs: '1.1rem' },
                      display: { sm: 'none', lg: 'inline-block' },
                    }}
                  >
                    02
                  </Typography>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '0.9rem' },
                      position: 'relative',
                      left: '2.6rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Crew
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>

            {/* Technology */}
            <Link
              to='/technology'
              style={{ textDecoration: 'none' }}
              onClick={() => setOpenBtn(false)}
            >
              <ListItem
                sx={[
                  {
                    width: { xs: SIZES.navbar_mobile_width, sm: '100%' },
                    height: { xs: SIZES.navbar_mobile_height, sm: '20px' },
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: COLORS.main_white,
                  },

                  {
                    '&:hover': {
                      cursor: 'pointer',
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '0.7rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: { xs: '5px', sm: '39px' },
                        height: { xs: '3rem', sm: '5px' },
                        position: 'absolute',
                        right: { xs: '0px', sm: '0.7rem' },
                        top: { sm: '3.4rem' },
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontWeight: '500',
                      position: 'relative',
                      left: '1.5rem',
                      fontSize: { xs: '1.1rem' },
                      display: { sm: 'none', lg: 'inline-block' },
                    }}
                  >
                    03
                  </Typography>
                  <Typography
                    variant='sublime1'
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '0.9rem' },
                      position: 'relative',
                      left: '2.6rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Technology
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </List>

          <CloseIcon sx={styles.closeIcon} onClick={() => setOpenBtn(false)} />
        </Box>
      </Box>
    </Box>
  )
}
