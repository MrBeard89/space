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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: '1rem',
    position: 'relative',
  },

  navlinksMobileContainer: {
    height: '100vh',
    width: SIZES.navbar_mobile_width,
    position: 'absolute',
    bgcolor: COLORS.freezed_white,
    top: '0',
    zIndex: '3',
    transition: 'ease-in-out 0.3s',
    backdropFilter: 'blur(25px)',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

    navlinksList: {
      listStyle: 'none',
      color: COLORS.main_white,
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'column',
      mt: '4.5rem',
    },
  },

  hamburger: {
    color: COLORS.light_blue,
    fontSize: '2.5rem',
    zIndex: '4',
    cursor: 'pointer',
  },
}

export { styles }
