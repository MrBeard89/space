import React from 'react'
import { Box, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import { styles } from '../pagestyles/home.style'
import { Navbar } from '../navbar/Navbar'

export const Home = () => {
  //Styles

  return (
    <>
      {/* Navbar comp */}
      <Navbar />
      {/* Home comp */}
      <Box sx={styles.homeWrapper}>
        {/* Home Text Box */}
        <Box sx={styles.homeTextBox}>
          <Typography variant='h6' sx={styles.homeTextBox.typographyFirst}>
            So, you want to travel to
          </Typography>

          <Typography variant='h1' sx={styles.homeTextBox.typographySecond}>
            Space
          </Typography>

          <Typography variant='subtitle1' sx={styles.homeTextBox.typographyThird}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </Typography>
        </Box>

        {/* Explore Btn */}
        <Link to='/space/destination'>
          <Box sx={styles.exploreBtn}>
            {/* Explore Text */}
            <Typography variant='h5' sx={styles.exploreText}>
              Explore
            </Typography>
          </Box>
        </Link>
      </Box>
    </>
  )
}
