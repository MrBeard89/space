import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../constants/colors'

export const NotFound = () => {
  return (
    <>
      <Box
        sx={[
          {
            bgcolor: COLORS.main_white,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            textAlign: 'center',
            mt: '-8rem',
          },
        ]}
      >
        <Typography
          variant='h1'
          sx={{ color: 'red', letterSpacing: '1rem', mb: '2rem', fontWeight: '500' }}
        >
          404
        </Typography>
        <Typography variant='h5' sx={{ color: 'black' }}>
          Ooops something went wrong,or the page doesn't exist!
        </Typography>
        <Typography variant='h5' sx={{ color: 'black' }}>
          Please go back to main page!
        </Typography>

        <Link to='/space-tourism-website/home'>
          <Box
            sx={[
              {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                bottom: '-3rem',
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
                    bgcolor: 'rgba(0,216,231,0.5)',
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
                bgcolor: '#D0D6F9',
                zIndex: '2',
                boxShadow: '0px 0px 28px 1px #767676',
              }}
            >
              Home
            </Typography>
          </Box>
        </Link>
      </Box>
    </>
  )
}
