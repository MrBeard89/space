import mobileBackground from '../../assets/technology/background-technology-mobile.jpg'
import tabletBackground from '../../assets/technology/background-technology-tablet.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  technologyWrapper: {
    backgroundImage: { xs: `url(${mobileBackground})`, sm: `url(${tabletBackground})` },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', sm: 'center' },
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'center',
    position: 'relative',
  },
  technologyHeader: {
    mt: '6rem',
    textAlign: 'center',
    p: '0px',
  },
  technologyHeaderTitle: {
    color: 'white',
    mb: '2rem',
    textTransform: 'uppercase',
    fontWeight: '300',
    position: { sm: 'absolute' },
    top: { sm: '7rem' },
    left: { sm: '1.5rem' },
  },

  technologyHeaderSpan: {
    color: 'gray',
    fontSize: SIZES.header_span_text,
    paddingRight: '1rem',
    fontWeight: '500',
  },
  technologyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: { xs: SIZES.mobile_container_width, sm: SIZES.tablet_container_width },
  },
  technologyList: {
    display: 'flex',
    gap: '0.8rem',
    justifyContent: 'center',
  },
  technologyListItem: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    p: '0px',
    bgcolor: COLORS.tech_list_btn,
    fontSize: '20px',
    border: `1px solid ${COLORS.dot}`,
    fontWeight: '200',
    '&:hover': {
      bgcolor: COLORS.main_white,
      color: COLORS.main_black,
    },
  },

  technologyName: {
    textTransform: 'uppercase',
    letterSpacing: '0.3rem',
    mb: '2rem',
    pt: '1rem',
  },

  technologyDescription: {
    color: COLORS.light_blue,
    lineHeight: { xs: '1.5rem', sm: '2rem' },
    fontSize: SIZES.description_text_size,
  },

  technologyImg: { height: 'clamp(170px, 45vw, 450px)', width: '100vw' },
  terminology: {
    fontSize: '18px',
    fontWeight: '200',
  },
}

export { styles }
