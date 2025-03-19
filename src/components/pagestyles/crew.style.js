import mobileBackground from '../../assets/crew/background-crew-mobile.jpg'
import tabletBackground from '../../assets/crew/background-crew-tablet.jpg'
import desktopBackground from '../../assets/crew/background-crew-desktop.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  crewWrapper: {
    backgroundImage: {
      xs: `url(${mobileBackground})`,
      sm: `url(${tabletBackground})`,
      lg: `url(${desktopBackground})`,
    },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column-reverse', lg: 'row-reverse' },
    justifyContent: { xs: 'flex-start', lg: 'center' },
    alignItems: { xs: 'center', lg: 'space-between' },
    gap: { xs: '1rem', lg: '6rem' },
    textAlign: { xs: 'center', lg: 'left' },
    position: 'relative',
    paddingBottom: '2rem',
  },
  crewHeader: {
    mt: { xs: '6rem', sm: '2rem' },
    textAlign: 'center',
    p: '0px',
  },
  crewHeaderTitle: {
    color: 'white',
    mb: '2rem',
    textTransform: 'uppercase',
    fontWeight: '300',
    position: { sm: 'absolute', lg: 'relative' },
    top: { sm: '7rem', lg: '-5rem' },
    left: { sm: '1.5rem', lg: '-36rem' },
    width: { sm: 'fit-content' },
    fontSize: { lg: '22px' },
  },

  crewHeaderSpan: {
    color: 'gray',
    fontSize: SIZES.header_span_text,
    paddingRight: '1rem',
    fontWeight: '500',
  },
  crewContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column-reverse' },
    gap: '1rem',
    width: { xs: SIZES.mobile_container_width, sm: SIZES.tablet_container_width },
    mt: { sm: '0px' },
  },
  crewList: {
    display: 'flex',
    gap: { xs: '0.8rem', lg: '1.2rem' },
    justifyContent: { xs: 'center', lg: 'flex-start' },
    mt: { lg: '4rem' },
  },
  crewListItem: {
    width: { xs: '10px', lg: '15px' },
    height: { xs: '10px', lg: '15px' },
    borderRadius: '50%',
    display: 'flex',
    position: 'relative',
    cursor: 'pointer',
    p: '0px',
    bgcolor: COLORS.dot,
    '&:hover': {
      bgcolor: COLORS.main_white,
    },
  },

  crewRole: {
    textTransform: 'uppercase',
    letterSpacing: '0.3rem',
    color: COLORS.dot,
    fontWeight: '300',
  },
  crewName: {
    textTransform: 'uppercase',
    letterSpacing: '0.3rem',
    mb: '2rem',
    fontSize: { lg: '44px' },
  },

  crewDescription: {
    color: COLORS.light_blue,
    lineHeight: { xs: '1.4rem', sm: '2rem' },
    fontSize: { xs: SIZES.description_text_size, lg: '18px' },
  },

  line: {
    height: '1px',
    width: SIZES.mobile_container_width,
    backgroundColor: COLORS.horizontal_line,
    border: 'none',
    position: 'relative',
    top: '-0.8rem',
    marginBottom: '1rem',
  },
  crewImg: { width: 'clamp(170px, 65vw, 420px)', height: 'clamp(170px, 65vw, 450px)' },
}

export { styles }
