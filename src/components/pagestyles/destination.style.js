import mobileBackground from '../../assets/destination/background-destination-mobile.jpg'
import tabletBackground from '../../assets/destination/background-destination-tablet.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  destinationWrapper: {
    backgroundImage: { xs: `url(${mobileBackground})`, sm: `url(${tabletBackground})` },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', sm: 'center' },
    alignItems: 'center',
    gap: { xs: '1rem', sm: '4rem' },
    textAlign: 'center',
    position: 'relative',
  },
  destinationHeader: {
    mt: { xs: '6rem', sm: '10rem' },
    textAlign: 'center',
  },
  destinationHeaderTitle: {
    color: 'white',
    mb: '2rem',
    textTransform: 'uppercase',
    fontWeight: '300',
    position: { sm: 'absolute' },
    left: { sm: '1.5rem' },
    top: { sm: '7rem' },
  },

  destinationHeaderSpan: {
    color: 'gray',
    fontSize: SIZES.header_span_text,
    paddingRight: '1rem',
    fontWeight: '500',
  },
  destinationContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: { xs: SIZES.mobile_container_width, sm: SIZES.tablet_container_width },
  },
  destinationList: {
    display: 'flex',
    gap: '0.1rem',
    justifyContent: 'center',
  },
  destinationListItem: {
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    fontSize: SIZES.small_text_size,
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
    fontSize: SIZES.description_text_size,
    mb: { xs: '1.5rem', sm: '3rem' },
  },

  line: {
    height: '1px',
    width: { xs: SIZES.mobile_container_width, sm: SIZES.tablet_container_width },
    backgroundColor: COLORS.horizontal_line,
    border: 'none',
    mt: '1.5rem',
    marginBottom: '0.5rem',
  },

  infoBottomContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: '1rem', sm: '2rem' },
    justifyContent: 'center',
  },

  infoContainerDistance: {
    color: COLORS.light_blue,
    textTransform: 'uppercase',
    fontSize: SIZES.small_text_size,
    letterSpacing: '0.2rem',
  },

  infoContainerTravel: {
    color: COLORS.light_blue,
    textTransform: 'uppercase',
    fontSize: SIZES.small_text_size,
    letterSpacing: '0.2rem',
  },
}

export { styles }
