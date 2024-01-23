import React, { useContext, useState } from 'react'
import { SpaceContext } from '../../context/SpaceContext'
import { Navbar } from '../navbar/Navbar'
import { Box, List, ListItem, Typography } from '@mui/material'
import { styles } from '../pagestyles/destination.style'

import Moon from '../../assets/destination/image-moon.png'
import Mars from '../../assets/destination/image-mars.png'
import Europa from '../../assets/destination/image-europa.png'
import Titan from '../../assets/destination/image-titan.png'
import { COLORS } from '../../constants/colors'

export const Destination = () => {
  const { destinations } = useContext(SpaceContext)
  const MoonDestination = destinations[0]
  const MarsDestination = destinations[1]
  const EuropaDestination = destinations[2]
  const TitanDestination = destinations[3]

  const [planet, setPlanet] = useState('Moon')

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Destination wrapper */}

      <Box sx={styles.destinationWrapper}>
        {/* Destination header */}

        <Box sx={styles.destinationHeader}>
          <Typography variant='h6' sx={styles.destinationHeaderTitle}>
            <span style={styles.destinationHeaderSpan}>01</span>
            Pick you destination
          </Typography>

          {/* Planet image */}
          <img
            src={
              planet === 'Moon'
                ? Moon
                : planet === 'Mars'
                ? Mars
                : planet === 'Europa'
                ? Europa
                : planet === 'Titan'
                ? Titan
                : ''
            }
            alt={`image of the ${planet}`}
            style={{ width: '170px' }}
          />
        </Box>

        {/* Dinamic component container */}
        <Box sx={styles.destinationContainer}>
          {/*  List of planets */}
          <List sx={styles.destinationList}>
            {/* Moon */}
            <ListItem
              onClick={() => setPlanet('Moon')}
              sx={[
                styles.destinationListItem,
                { color: planet === 'Moon' ? COLORS.main_white : COLORS.light_blue },
              ]}
            >
              Moon
            </ListItem>

            {/* Mars */}
            <ListItem
              onClick={() => setPlanet('Mars')}
              sx={[
                styles.destinationListItem,
                { color: planet === 'Mars' ? COLORS.main_white : COLORS.light_blue },
              ]}
            >
              Mars
            </ListItem>

            {/* Europa */}
            <ListItem
              onClick={() => setPlanet('Europa')}
              sx={[
                styles.destinationListItem,
                { color: planet === 'Europa' ? COLORS.main_white : COLORS.light_blue },
              ]}
            >
              Europa
            </ListItem>

            {/* Titan */}
            <ListItem
              onClick={() => setPlanet('Titan')}
              sx={[
                styles.destinationListItem,
                { color: planet === 'Titan' ? COLORS.main_white : COLORS.light_blue },
              ]}
            >
              Titan
            </ListItem>
          </List>

          {/* *********************************************************************** */}
          {/* Dinamic component - moon */}
          {planet === 'Moon' ? (
            <>
              <Box>
                {/* Planet title */}
                <Typography variant='h2' sx={styles.planetTitle}>
                  {MoonDestination.name}
                </Typography>
                {/* Planet description */}
                <Typography variant='subtitle1' sx={styles.planetDescription}>
                  {MoonDestination.description}
                </Typography>
                {/* Line */}
                <hr style={styles.line} />
              </Box>

              <Box sx={styles.infoBottomContainer}>
                {/* Distance container */}
                <Box>
                  <Typography sx={styles.infoContainerDistance}>AVG.Distance</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{MoonDestination.distance}</Typography>
                </Box>
                {/* Travel container */}
                <Box>
                  <Typography sx={styles.infoContainerTravel}>EST.Travel Time</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{MoonDestination.travel}</Typography>
                </Box>
              </Box>
            </>
          ) : planet === 'Mars' ? (
            //Dinamic component - mars
            <>
              <Box>
                {/* Planet title */}
                <Typography variant='h2' sx={styles.planetTitle}>
                  {MarsDestination.name}
                </Typography>
                {/* Planet description */}
                <Typography variant='subtitle1' sx={styles.planetDescription}>
                  {MarsDestination.description}
                </Typography>
                {/* Line */}
                <hr style={styles.line} />
              </Box>

              <Box sx={styles.infoBottomContainer}>
                {/* Distance container */}
                <Box>
                  <Typography sx={styles.infoContainerDistance}>AVG.Distance</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{MarsDestination.distance}</Typography>
                </Box>
                {/* Travel container */}
                <Box>
                  <Typography sx={styles.infoContainerTravel}>EST.Travel Time</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{MarsDestination.travel}</Typography>
                </Box>
              </Box>
            </>
          ) : planet === 'Europa' ? (
            //Dinamic component - europa
            <>
              <Box>
                {/* Planet title */}
                <Typography variant='h2' sx={styles.planetTitle}>
                  {EuropaDestination.name}
                </Typography>
                {/* Planet description */}
                <Typography variant='subtitle1' sx={styles.planetDescription}>
                  {EuropaDestination.description}
                </Typography>
                {/* Line */}
                <hr style={styles.line} />
              </Box>

              <Box sx={styles.infoBottomContainer}>
                {/* Distance container */}
                <Box>
                  <Typography sx={styles.infoContainerDistance}>AVG.Distance</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{EuropaDestination.distance}</Typography>
                </Box>
                {/* Travel container */}
                <Box>
                  <Typography sx={styles.infoContainerTravel}>EST.Travel Time</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{EuropaDestination.travel}</Typography>
                </Box>
              </Box>
            </>
          ) : planet === 'Titan' ? (
            //Dinamic component - titan
            <>
              <Box>
                {/* Planet title */}
                <Typography variant='h2' sx={styles.planetTitle}>
                  {TitanDestination.name}
                </Typography>
                {/* Planet description */}
                <Typography variant='subtitle1' sx={styles.planetDescription}>
                  {TitanDestination.description}
                </Typography>
                {/* Line */}
                <hr style={styles.line} />
              </Box>

              <Box sx={styles.infoBottomContainer}>
                {/* Distance container */}
                <Box>
                  <Typography sx={styles.infoContainerDistance}>AVG.Distance</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{TitanDestination.distance}</Typography>
                </Box>
                {/* Travel container */}
                <Box>
                  <Typography sx={styles.infoContainerTravel}>EST.Travel Time</Typography>
                  <Typography sx={{ fontSize: '32px' }}>{TitanDestination.travel}</Typography>
                </Box>
              </Box>
            </>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </>
  )
}
