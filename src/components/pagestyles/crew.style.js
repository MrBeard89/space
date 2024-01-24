import mobileBackground from '../../assets/crew/background-crew-mobile.jpg'
import tabletBackground from '../../assets/crew/background-crew-tablet.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  crewWrapper: {
    backgroundImage: { xs: `url(${mobileBackground})`, sm: `url(${tabletBackground})` },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column-reverse' },
    justifyContent: { xs: 'flex-start' },
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'center',
    position: 'relative',
  },
  crewHeader: {
    mt: '6rem',
    textAlign: 'center',
    p: '0px',
  },
  crewHeaderTitle: {
    color: 'white',
    mb: '2rem',
    textTransform: 'uppercase',
    fontWeight: '300',
    position: { sm: 'absolute' },
    top: { sm: '7rem' },
    left: { sm: '1.5rem' },
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
    gap: '0.8rem',
    justifyContent: 'center',
  },
  crewListItem: {
    width: '10px',
    height: '10px',
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
  },

  crewDescription: {
    color: COLORS.light_blue,
    lineHeight: { xs: '1.4rem', sm: '2rem' },
    fontSize: SIZES.description_text_size,
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
  crewImg: { width: 'clamp(170px, 65vw, 550px)', height: 'clamp(170px, 65vw, 550px)' },
}

export { styles }
