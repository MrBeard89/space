import React from 'react'
import { Box, Typography } from '@mui/material'
import mobileBackground from '../../assets/home/background-home-mobile.jpg'
import { Navbar } from '../navbar/Navbar'
import { Link } from 'react-router-dom'

export const Home = () => {
  //Styles
  const homeWrapper = {
    backgroundImage: `url(${mobileBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'center',
    position: 'relative',
  }
  return (
    <>
      {/* Navbar comp */}
      <Navbar />
      {/* Home comp */}
      <Box className='home_wrapper' sx={homeWrapper}>
        <Box sx={{ width: '327px', height: '276px', mb: '5rem', mt: '8rem', p: '0.5rem' }}>
          <Typography
            variant='h6'
            sx={{
              color: '#D0D6F9',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '16px',
              mb: '1rem',
            }}
          >
            So, you want to travel to
          </Typography>

          <Typography
            variant='h1'
            sx={{
              color: '#fff',
              textTransform: 'uppercase',
              mb: '1rem',
              fontSize: '80px',
              letterSpacing: '5px',
            }}
          >
            Space
          </Typography>

          <Typography
            variant='subtitle1'
            sx={{ color: '#D0D6F9', fontSize: '17px', lineHeight: '1.5rem' }}
          >
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </Typography>
        </Box>

        <Link to='/home'>
          <Box
            sx={[
              {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                bottom: '-2rem',
                //cursor: 'pointer',
                zIndex: '3',
              },

              {
                '&:hover': {
                  '&:after': {
                    content: "''",
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    bgcolor: 'rgba(0,216,231,0.3)',
                    transition: 'ease-in-out 1s',
                    position: 'absolute',
                    top: '-3rem',
                    zIndex: '1',
                  },
                },
              },
            ]}
          >
            <Typography
              variant='h5'
              sx={{
                position: 'absolute',
                top: '38%',
                fontWeight: '400',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                //height: '30px',
                textTransform: 'uppercase',
                color: '#000',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                bgcolor: '#fff',
                zIndex: '2',
                boxShadow: '0px 0px 28px 4px #767676',
              }}
            >
              Explore
            </Typography>
          </Box>
        </Link>
      </Box>
    </>
  )
}
