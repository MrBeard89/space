import mobileBackground from '../../assets/destination/background-destination-mobile.jpg'
import tabletBackground from '../../assets/destination/background-destination-tablet.jpg'
import desktopBackground from '../../assets/destination/background-destination-desktop.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  destinationWrapper: {
    backgroundImage: {
      xs: `url(${mobileBackground})`,
      sm: `url(${tabletBackground})`,
      lg: `url(${desktopBackground})`,
    },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: {
      xs: '100%',
      sm: '100%',
      lg: '100vh',
    },
    width: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    justifyContent: { xs: 'flex-start', lg: 'center' },
    alignItems: { xs: 'center', lg: 'space-between' },
    gap: { xs: '1rem', sm: '4rem', lg: '8rem' },
    textAlign: { xs: 'center', lg: 'left' },
    position: 'relative',
  },
  destinationHeader: {
    mt: { xs: '6rem', sm: '10rem', lg: '2rem' },
    textAlign: { xs: 'center', lg: 'left' },
  },
  destinationHeaderTitle: {
    color: 'white',
    mb: { xs: '2rem' },
    mt: { lg: '-2rem' },
    textTransform: 'uppercase',
    fontWeight: '300',
    position: { sm: 'absolute', lg: 'sticky' },
    left: { sm: '1.5rem' },
    top: { sm: '7rem' },
    textAlign: { lg: 'center' },
    fontSize: { lg: '22px' },
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
    justifyContent: { xs: 'center' },
  },
  destinationListItem: {
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    fontSize: { xs: SIZES.small_text_size, lg: '18px' },
    padding: '0px',
    display: 'flex',
    justifyContent: { xs: 'center', lg: 'flex-start' },
    position: 'relative',
    cursor: 'pointer',
    mb: { lg: '4rem' },
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
    lineHeight: { xs: '1.4rem', lg: '2rem' },
    fontSize: { xs: SIZES.description_text_size, lg: '18px' },
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
    justifyContent: { xs: 'center', lg: 'flex-start' },
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
