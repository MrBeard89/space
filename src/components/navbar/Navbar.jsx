import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, List, ListItem, ListItemText } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { SpaceContext } from '../../context/SpaceContext'

import { styles } from './navbar.style'
import { COLORS } from '../../constants/colors'
import { SIZES } from '../../constants/sizes'

export const Navbar = () => {
  const { openBtn, handleOpenBtn, setOpenBtn } = useContext(SpaceContext)
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

        {/* Navlinks container - mobile */}
        <Box sx={[styles.navlinksMobileContainer, { right: openBtn ? '0' : '-17rem' }]}>
          {/* Links */}
          <List sx={styles.navlinksMobileContainer.navlinksList}>
            {/* Home */}
            <Link to='/home' style={{ textDecoration: 'none' }} onClick={() => setOpenBtn(false)}>
              <ListItem
                sx={[
                  {
                    width: SIZES.navbar_mobile_width,
                    height: SIZES.navbar_mobile_height,
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
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <span
                    style={{
                      fontWeight: '500',
                      position: 'relative',
                      left: '1.5rem',
                      fontSize: '1.3rem',
                    }}
                  >
                    00
                  </span>
                  <span
                    style={{
                      fontSize: '1.3rem',
                      position: 'relative',
                      left: '2.6rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Home
                  </span>
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
                    width: SIZES.navbar_mobile_width,
                    height: SIZES.navbar_mobile_height,
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
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <span
                    style={{
                      position: 'relative',
                      left: '1.5rem',
                      fontWeight: '500',
                      fontSize: '1.3rem',
                    }}
                  >
                    01
                  </span>
                  <span
                    style={{
                      fontSize: '1.3rem',
                      position: 'relative',
                      left: '3rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Destination
                  </span>
                </ListItemText>
              </ListItem>
            </Link>

            {/* Crew */}
            <Link to='/crew' style={{ textDecoration: 'none' }} onClick={() => setOpenBtn(false)}>
              <ListItem
                sx={[
                  {
                    width: SIZES.navbar_mobile_width,
                    height: SIZES.navbar_mobile_height,
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
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <span
                    style={{
                      fontWeight: '500',
                      position: 'relative',
                      left: '1.5rem',
                      fontSize: '1.3rem',
                    }}
                  >
                    02
                  </span>
                  <span
                    style={{
                      fontSize: '1.3rem',
                      position: 'relative',
                      left: '2.6rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Crew
                  </span>
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
                    width: SIZES.navbar_mobile_width,
                    height: SIZES.navbar_mobile_height,
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
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: 'gray',
                      },
                    },
                    '&:active': {
                      '&::after': {
                        content: '""',
                        width: '5px',
                        height: '3rem',
                        position: 'absolute',
                        right: '0',
                        bgcolor: COLORS.main_white,
                      },
                    },
                  },
                ]}
              >
                <ListItemText sx={{ position: 'relative' }}>
                  <span
                    style={{
                      fontWeight: '500',
                      position: 'relative',
                      left: '1.5rem',
                      fontSize: '1.3rem',
                    }}
                  >
                    03
                  </span>
                  <span
                    style={{
                      fontSize: '1.3rem',
                      position: 'relative',
                      left: '2.6rem',
                      letterSpacing: '0.1rem',
                    }}
                  >
                    Technology
                  </span>
                </ListItemText>
              </ListItem>
            </Link>
          </List>

          <CloseIcon
            sx={{ color: `${COLORS.light_blue}`, fontSize: '2.5rem', p: '1rem', cursor: 'pointer' }}
            onClick={() => setOpenBtn(false)}
          />
        </Box>
      </Box>
    </Box>
  )
}
