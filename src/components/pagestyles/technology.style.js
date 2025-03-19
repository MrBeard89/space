import mobileBackground from '../../assets/technology/background-technology-mobile.jpg'
import tabletBackground from '../../assets/technology/background-technology-tablet.jpg'
import desktopBackground from '../../assets/technology/background-technology-desktop.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  technologyWrapper: {
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
    flexDirection: { xs: 'column', lg: 'row-reverse' },
    justifyContent: { xs: 'flex-start', sm: 'center', lg: 'center' },
    alignItems: { xs: 'center', lg: 'space-between' },
    gap: { xs: '1rem', lg: '12rem' },
    textAlign: { xs: 'center', lg: 'left' },
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
    position: { sm: 'sticky', lg: 'relative' },
    top: { sm: '7rem', lg: '-18rem' },
    left: { sm: '1.5rem', lg: '-50.5rem' },
    width: { sm: 'fit-content' },
    fontSize: { lg: '22px' },
  },

  technologyHeaderSpan: {
    color: 'gray',
    fontSize: SIZES.header_span_text,
    paddingRight: '1rem',
    fontWeight: '500',
  },
  technologyContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    gap: { xs: '1rem', lg: '3rem' },
    width: {
      xs: SIZES.mobile_container_width,
      sm: SIZES.tablet_container_width,
      lg: 'fit-content',
    },
  },
  technologyList: {
    display: 'flex',
    flexDirection: { lg: 'column' },
    gap: { xs: '0.8rem', lg: '2rem' },
    justifyContent: 'center',
  },
  technologyListItem: {
    width: { xs: '50px', lg: '65px' },
    height: { xs: '50px', lg: '65px' },
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
    fontSize: { lg: '45px' },
  },

  technologyDescription: {
    color: COLORS.light_blue,
    lineHeight: { xs: '1.5rem', sm: '2rem' },
    fontSize: { xs: SIZES.description_text_size, lg: '18px' },
    width: { lg: SIZES.technology_container_width },
  },

  technologyImg: { height: 'clamp(170px, 45vw, 400px)', width: '100vw' },
  terminology: {
    fontSize: '18px',
    fontWeight: '200',
  },
  imgContainer: {
    display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
  },
  desktopImgContainer: {
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
    position: { lg: 'absolute' },
    right: { lg: '0px' },
    top: { lg: '25vh' },
    zIndex: '1',
  },
  desktopTechnologyImg: { height: '525px', width: '515px' },
}

export { styles }
