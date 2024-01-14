import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <Link to='/home'>
          <img src='../src/assets/shared/logo.svg' alt='logo' />
        </Link>

        <Box onClick={handleOpenBtn}>
          {openBtn == false ? (
            <MenuIcon
              sx={{
                color: '#D0D6F9',
                fontSize: '2.5rem',
                zIndex: '4',
                cursor: 'pointer',
              }}
            />
          ) : (
            ''
          )}
        </Box>

        <Box
          sx={{
            height: '100vh',
            width: '254px',
            position: 'absolute',
            bgcolor: 'rgba(255,255,255, 0.1)',
            top: '0',
            right: openBtn ? '0' : '-17rem',
            zIndex: '3',
            transition: 'ease-in-out 0.3s',
            backdropFilter: 'blur(25px)',
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          {/* Links */}
          <List
            className='navlink_container'
            sx={[
              {
                listStyle: 'none',
                color: '#fff',
                textTransform: 'uppercase',
                display: 'flex',
                flexDirection: 'column',
                mt: '4.5rem',
              },
            ]}
          >
            {/* Home */}
            <Link to='/home' style={{ textDecoration: 'none' }} onClick={() => setOpenBtn(false)}>
              <ListItem
                sx={[
                  {
                    width: '254px',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: '#fff',
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
                        bgcolor: 'white',
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
                    width: '254px',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: '#fff',
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
                        bgcolor: 'white',
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
                    width: '254px',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: '#fff',
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
                        bgcolor: 'white',
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
                    width: '254px',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: '#fff',
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
                        bgcolor: 'white',
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
            sx={{ color: '#D0D6F9', fontSize: '2.5rem', p: '1rem', cursor: 'pointer' }}
            onClick={() => setOpenBtn(false)}
          />
        </Box>
      </Box>
    </Box>
  )
}
