import mobileBackground from '../../assets/crew/background-crew-mobile.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  crewWrapper: {
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
  },

  crewHeaderSpan: {
    color: 'gray',
    fontSize: SIZES.header_span_text,
    paddingRight: '1rem',
    fontWeight: '500',
  },
  crewContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: SIZES.mobile_container_width,
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
    lineHeight: '1.4rem',
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
  crewImg: { width: '270px', height: '270px' },
}

export { styles }
