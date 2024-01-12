import React from 'react'
import { Box, Typography } from '@mui/material'
import mobileBackground from '../../assets/home/background-home-mobile.jpg'

export const Home = () => {
  const homeWrapper = {
    backgroundImage: `url(${mobileBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'center',
    position: 'relative',
  }
  return (
    <Box className='home_wrapper' sx={homeWrapper}>
      <Box sx={{ width: '327px', height: '276px', mb: '1rem' }}>
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
          sx={{ color: '#D0D6F9', fontSize: '15px', lineHeight: '1.5rem' }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </Typography>
      </Box>

      <Box
        sx={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          bgcolor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'relative',
          bottom: '-5rem',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            position: 'absolute',
            top: '38%',
            fontWeight: '400',
            textAlign: 'center',
            height: '30px',
            textTransform: 'uppercase',
          }}
        >
          Explore
        </Typography>
      </Box>
    </Box>
  )
}
