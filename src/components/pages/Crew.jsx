import React, { useContext, useEffect, useState } from 'react'
import { SpaceContext } from '../../context/SpaceContext'
import { Navbar } from '../navbar/Navbar'
import { Box, List, ListItem, Typography } from '@mui/material'
import { styles } from '../pagestyles/crew.style'

import Anousheh from '../../assets/crew/image-anousheh-ansari.png'
import Douglas from '../../assets/crew/image-douglas-hurley.png'
import Mark from '../../assets/crew/image-mark-shuttleworth.png'
import Victor from '../../assets/crew/image-victor-glover.png'
import { COLORS } from '../../constants/colors'

export const Crew = () => {
  const { crew } = useContext(SpaceContext)
  const CrewAnousheh = crew[3]
  const CrewDouglas = crew[0]
  const CrewMark = crew[1]
  const CrewVictor = crew[2]

  const [crewMember, setCrewMember] = useState('Douglas Hurley')
  const [crewSetter, setCrewSetter] = useState(0)

  function setter() {
    if (crewSetter === 0) {
      setCrewMember('Douglas Hurley')
    } else if (crewSetter === 1) {
      setCrewMember('Mark Shuttleworth')
    } else if (crewSetter === 2) {
      setCrewMember('Victor Glover')
    } else if (crewSetter === 3) {
      setCrewMember('Anousheh Ansari')
    }
  }

  useEffect(() => {
    crewSetter < 4 ? setter() : ''
    setTimeout(() => {
      if (crewSetter < 4) {
        setCrewSetter((prev) => prev + 1)
        console.log(crewSetter)
      } else {
        setCrewSetter(0)
        console.log('setted')
        console.log(crewSetter)
      }
    }, [8000])
  }, [crewSetter])

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Destination wrapper */}

      <Box sx={styles.crewWrapper}>
        {/* crew header */}

        <Box sx={styles.crewHeader}>
          <Typography variant='h6' sx={styles.crewHeaderTitle}>
            <span style={styles.crewHeaderSpan}>02</span>
            Meet your crew
          </Typography>

          {/* crew image */}
          <img
            src={
              crewMember === 'Douglas Hurley'
                ? Douglas
                : crewMember === 'Anousheh Ansari'
                ? Anousheh
                : crewMember === 'Mark Shuttleworth'
                ? Mark
                : crewMember === 'Victor Glover'
                ? Victor
                : ''
            }
            alt={`image of the ${crewMember}`}
            style={styles.crewImg}
          />
          <hr style={styles.line} />
        </Box>

        {/* Dinamic component container */}
        <Box sx={styles.crewContainer}>
          {/*  List of dots */}
          <List sx={styles.crewList}>
            {/* Douglas Hurley */}
            <ListItem
              onClick={() => setCrewMember('Douglas Hurley')}
              sx={[
                styles.crewListItem,
                {
                  bgcolor: crewMember === 'Douglas Hurley' ? COLORS.main_white : COLORS.dot,
                },
              ]}
            ></ListItem>

            {/* Mark Shuttleworth */}
            <ListItem
              onClick={() => setCrewMember('Mark Shuttleworth')}
              sx={[
                styles.crewListItem,
                {
                  bgcolor: crewMember === 'Mark Shuttleworth' ? COLORS.main_white : COLORS.dot,
                },
              ]}
            ></ListItem>

            {/* Victor Glover */}
            <ListItem
              onClick={() => setCrewMember('Victor Glover')}
              sx={[
                styles.crewListItem,
                { bgcolor: crewMember === 'Victor Glover' ? COLORS.main_white : COLORS.dot },
              ]}
            ></ListItem>

            {/* Anousheh Ansari */}
            <ListItem
              onClick={() => setCrewMember('Anousheh Ansari')}
              sx={[
                styles.crewListItem,
                { bgcolor: crewMember === 'Anousheh Ansari' ? COLORS.main_white : COLORS.dot },
              ]}
            ></ListItem>
          </List>

          {/* *********************************************************************** */}
          {/* Dinamic component - Douglas Hurley */}
          {crewMember === 'Douglas Hurley' ? (
            <>
              <Box>
                {/* crew role */}
                <Typography variant='h6' sx={styles.crewRole}>
                  {CrewDouglas.role}
                </Typography>
                {/* crew name */}
                <Typography variant='h5' sx={styles.crewName}>
                  {CrewDouglas.name}
                </Typography>
                {/* crew description */}
                <Typography variant='subtitle1' sx={styles.crewDescription}>
                  {CrewDouglas.bio}
                </Typography>
              </Box>
            </>
          ) : crewMember === 'Mark Shuttleworth' ? (
            //Dinamic component - Mark Shuttleworth
            <>
              <Box>
                {/* crew role */}
                <Typography variant='h6' sx={styles.crewRole}>
                  {CrewMark.role}
                </Typography>
                {/* crew name */}
                <Typography variant='h5' sx={styles.crewName}>
                  {CrewMark.name}
                </Typography>
                {/* crew description */}
                <Typography variant='subtitle1' sx={styles.crewDescription}>
                  {CrewMark.bio}
                </Typography>
              </Box>
            </>
          ) : crewMember === 'Victor Glover' ? (
            //Dinamic component - Victor Glover
            <>
              <Box>
                {/* crew role */}
                <Typography variant='h6' sx={styles.crewRole}>
                  {CrewVictor.role}
                </Typography>
                {/* crew name */}
                <Typography variant='h5' sx={styles.crewName}>
                  {CrewVictor.name}
                </Typography>
                {/* crew description */}
                <Typography variant='subtitle1' sx={styles.crewDescription}>
                  {CrewVictor.bio}
                </Typography>
              </Box>
            </>
          ) : crewMember === 'Anousheh Ansari' ? (
            //Dinamic component - Anousheh Ansari
            <>
              <Box>
                {/* crew role */}
                <Typography variant='h6' sx={styles.crewRole}>
                  {CrewAnousheh.role}
                </Typography>
                {/* crew name */}
                <Typography variant='h5' sx={styles.crewName}>
                  {CrewAnousheh.name}
                </Typography>
                {/* crew description */}
                <Typography variant='subtitle1' sx={styles.crewDescription}>
                  {CrewAnousheh.bio}
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
