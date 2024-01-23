import mobileBackground from '../../assets/destination/background-destination-mobile.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  destinationWrapper: {
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
  },
  destinationHeader: {
    mt: '6rem',
    textAlign: 'center',
  },
  destinationHeaderTitle: {
    color: 'white',
    mb: '2rem',
    textTransform: 'uppercase',
    fontWeight: '300',
  },

  destinationHeaderSpan: {
    color: 'gray',
    fontSize: '19px',
    paddingRight: '1rem',
    fontWeight: '500',
  },
  destinationContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: SIZES.mobile_container_width,
  },
  destinationList: {
    display: 'flex',
    gap: '0.1rem',
    justifyContent: 'center',
  },
  destinationListItem: {
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    fontSize: '13px',
    padding: '0px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      color: COLORS.main_white,
      '&:after': {
        content: "''",
        width: '80px',
        height: '5px',
        bgcolor: COLORS.main_white,
        transition: 'ease-in-out 1s',
        position: 'absolute',
        bottom: '-0.7rem',
        zIndex: '3',
      },
    },
  },

  planetTitle: {
    textTransform: 'uppercase',
    letterSpacing: '0.3rem',
    mb: '1rem',
  },

  planetDescription: {
    color: COLORS.light_blue,
    lineHeight: '1.4rem',
    fontSize: '14px',
  },

  line: {
    height: '1px',
    width: '327px',
    backgroundColor: '#383B4B',
    border: 'none',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  },

  infoBottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  infoContainerDistance: {
    color: COLORS.light_blue,
    textTransform: 'uppercase',
    fontSize: '13px',
    letterSpacing: '0.2rem',
  },

  infoContainerTravel: {
    color: COLORS.light_blue,
    textTransform: 'uppercase',
    fontSize: '13px',
    letterSpacing: '0.2rem',
  },
}

export { styles }
