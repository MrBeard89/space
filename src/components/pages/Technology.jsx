import React, { useContext, useEffect, useState } from 'react'
import { SpaceContext } from '../../context/SpaceContext'
import { Navbar } from '../navbar/Navbar'
import { Box, List, ListItem, Typography } from '@mui/material'
import { styles } from '../pagestyles/technology.style'

import Launch from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import Capsule from '../../assets/technology/image-space-capsule-landscape.jpg'
import Spaceport from '../../assets/technology/image-spaceport-landscape.jpg'

//Desktop portraits
import Launch_Desktop from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import Capsule_Desktop from '../../assets/technology/image-space-capsule-portrait.jpg'
import Spaceport_Desktop from '../../assets/technology/image-spaceport-portrait.jpg'

import { COLORS } from '../../constants/colors'

export const Technology = () => {
  const { technology } = useContext(SpaceContext)

  const Tech1 = technology[0]
  const Tech2 = technology[1]
  const Tech3 = technology[2]

  const [technologyItem, setTechnologyItem] = useState('Launch vehicle')
  const [technologySetter, setTechnologySetter] = useState(0)

  function setter() {
    if (technologySetter === 0) {
      setTechnologyItem('Launch vehicle')
    } else if (technologySetter === 1) {
      setTechnologyItem('Spaceport')
    } else if (technologySetter === 2) {
      setTechnologyItem('Space capsule')
    }
  }

  useEffect(() => {
    technologySetter < 3 ? setter() : ''
    setTimeout(() => {
      if (technologySetter < 3) {
        setTechnologySetter((prev) => prev + 1)
        console.log(technologySetter)
      } else {
        setTechnologySetter(0)
        console.log('setted')
        console.log(technologySetter)
      }
    }, [8000])
  }, [technologySetter])

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Technology wrapper */}

      <Box sx={styles.technologyWrapper}>
        {/* technology header */}

        <Box sx={styles.technologyHeader}>
          <Typography variant='h6' sx={styles.technologyHeaderTitle}>
            <span style={styles.technologyHeaderSpan}>03</span>
            Space launch 101
          </Typography>
          <Box sx={styles.imgContainer}>
            {/* technology image */}
            <img
              src={
                technologyItem === 'Launch vehicle'
                  ? Launch
                  : technologyItem === 'Spaceport'
                  ? Spaceport
                  : technologyItem === 'Space capsule'
                  ? Capsule
                  : ''
              }
              alt={`image of the ${technologyItem}`}
              style={styles.technologyImg}
            />
          </Box>
          {/* Desktop technology img */}
          <Box sx={styles.desktopImgContainer}>
            {/* technology image */}
            <img
              src={
                technologyItem === 'Launch vehicle'
                  ? Launch_Desktop
                  : technologyItem === 'Spaceport'
                  ? Spaceport_Desktop
                  : technologyItem === 'Space capsule'
                  ? Capsule_Desktop
                  : ''
              }
              alt={`image of the ${technologyItem}`}
              style={styles.desktopTechnologyImg}
            />
          </Box>
        </Box>

        {/* Dinamic component container */}
        <Box sx={styles.technologyContainer}>
          {/*  List of dots */}
          <List sx={styles.technologyList}>
            {/* Launch vehicle */}
            <ListItem
              onClick={() => setTechnologyItem('Launch vehicle')}
              sx={[
                styles.technologyListItem,
                {
                  bgcolor:
                    technologyItem === 'Launch vehicle' ? COLORS.main_white : COLORS.tech_list_btn,
                },
                {
                  color:
                    technologyItem === 'Launch vehicle' ? COLORS.main_black : COLORS.main_white,
                },
              ]}
            >
              1
            </ListItem>

            {/* Spaceport */}
            <ListItem
              onClick={() => setTechnologyItem('Spaceport')}
              sx={[
                styles.technologyListItem,
                {
                  bgcolor:
                    technologyItem === 'Spaceport' ? COLORS.main_white : COLORS.tech_list_btn,
                },
                {
                  color: technologyItem === 'Spaceport' ? COLORS.main_black : COLORS.main_white,
                },
              ]}
            >
              2
            </ListItem>

            {/* Space capsule */}
            <ListItem
              onClick={() => setTechnologyItem('Space capsule')}
              sx={[
                styles.technologyListItem,
                {
                  bgcolor:
                    technologyItem === 'Space capsule' ? COLORS.main_white : COLORS.tech_list_btn,
                },
                {
                  color: technologyItem === 'Space capsule' ? COLORS.main_black : COLORS.main_white,
                },
              ]}
            >
              3
            </ListItem>
          </List>

          {/* *********************************************************************** */}
          {/* Dinamic component - Launch vehicle */}
          {technologyItem === 'Launch vehicle' ? (
            <>
              <Box>
                <Typography variant='sublime1' sx={styles.terminology}>
                  The Terminology ...
                </Typography>
                {/* technology name */}
                <Typography variant='h5' sx={styles.technologyName}>
                  {Tech1.name}
                </Typography>
                {/* technology description */}
                <Typography variant='subtitle1' sx={styles.technologyDescription}>
                  {Tech1.description}
                </Typography>
              </Box>
            </>
          ) : technologyItem === 'Spaceport' ? (
            //Spaceport
            <>
              <Box>
                <Typography variant='sublime1' sx={styles.terminology}>
                  The Terminology ...
                </Typography>
                {/* technology name */}
                <Typography variant='h5' sx={styles.technologyName}>
                  {Tech2.name}
                </Typography>
                {/* technology description */}
                <Typography variant='subtitle1' sx={styles.technologyDescription}>
                  {Tech2.description}
                </Typography>
              </Box>
            </>
          ) : technologyItem === 'Space capsule' ? (
            //Space capsule
            <>
              <Box>
                <Typography variant='sublime1' sx={styles.terminology}>
                  The Terminology ...
                </Typography>
                {/* technology name */}
                <Typography variant='h5' sx={styles.technologyName}>
                  {Tech3.name}
                </Typography>
                {/* technology description */}
                <Typography variant='subtitle1' sx={styles.technologyDescription}>
                  {Tech3.description}
                </Typography>
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
