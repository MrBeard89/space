import { COLORS } from '../../constants/colors'
import { SIZES } from '../../constants/sizes'

const styles = {
  //Mobile
  navbarWrapper: {
    width: '100vw',
    zIndex: '5',
    display: 'block',
    position: ' fixed',
    top: '0',
    mb: '4rem',
  },
  navbarContainer: {
    display: 'flex',
    height: { sm: '5rem' },
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: '1rem',
    position: 'relative',
  },

  navlinksContainer: {
    height: { xs: '100vh', sm: '96px' },
    width: {
      xs: SIZES.navbar_mobile_width,
      sm: SIZES.navbar_tablet_width,
      lg: SIZES.navbar_desktop_width,
    },
    position: { xs: 'absolute' },
    bgcolor: COLORS.freezed_white,
    top: { xs: '0' },
    right: { sm: '0' },
    zIndex: '3',
    transition: 'ease-in-out 0.3s',
    backdropFilter: 'blur(25px)',
    display: 'flex',
    flexDirection: { xs: 'column-reverse', sm: 'row' },
    alignItems: { xs: 'flex-end', sm: 'center' },
    justifyContent: { xs: 'flex-end', sm: 'space-between' },

    navlinksList: {
      listStyle: 'none',
      color: COLORS.main_white,
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: { sm: 'space-between' },
      alignItems: { sm: 'center' },
      mt: { xs: '4.5rem', sm: '0rem' },
      width: { sm: 'auto', lg: '722px' },
      ml: { sm: '-1.5rem', lg: '1rem' },
    },
  },

  hamburger: {
    color: COLORS.light_blue,
    fontSize: '2.5rem',
    zIndex: '4',
    cursor: 'pointer',
    display: { sm: 'none' },
  },

  closeIcon: {
    color: COLORS.light_blue,
    fontSize: '2.5rem',
    p: '1rem',
    cursor: 'pointer',
    display: { sm: 'none' },
  },
  lineContainer: {
    display: { xs: 'none', sm: 'none', md: 'none', xl: 'flex', lg: 'none' },
    position: 'fixed',
    left: '-30rem',
    top: '2.6rem',
    zIndex: '4',
  },
}

export { styles }
