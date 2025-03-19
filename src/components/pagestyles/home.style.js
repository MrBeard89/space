import mobileBackground from '../../assets/home/background-home-mobile.jpg'
import tabletBackground from '../../assets/home/background-home-tablet.jpg'
import desktopBackground from '../../assets/home/background-home-desktop.jpg'

import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  homeWrapper: {
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
    flexDirection: { xs: 'column', lg: 'row' },
    justifyContent: { xs: 'flex-start', lg: 'center' },
    alignItems: { xs: 'center', lg: 'space-between' },
    gap: { xs: '1rem', sm: '12rem', lg: '30rem' },
    textAlign: 'center',
    position: 'relative',
  },

  homeTextBox: {
    width: {
      xs: SIZES.mobile_container_width,
      sm: SIZES.tablet_container_width,
      lg: SIZES.home_text_box_width_desktop,
    },
    height: { xs: SIZES.home_text_box_height, lg: SIZES.home_text_box_height_desktop },
    mb: '5rem',
    mt: '8rem',
    p: '0.5rem',
    ml: { lg: '-8rem' },

    typographyFirst: {
      color: COLORS.light_blue,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontSize: { xs: '16px', lg: '22px' },
      mb: '1rem',
      textAlign: { lg: 'left' },
    },

    typographySecond: {
      color: COLORS.main_white,
      textTransform: 'uppercase',
      mb: '1rem',
      fontSize: { xs: '80px', sm: '140px' },
      letterSpacing: '5px',
      textAlign: { lg: 'left' },
    },

    typographyThird: {
      color: COLORS.light_blue,
      fontSize: '17px',
      lineHeight: { xs: '1.5rem', sm: '2rem' },
      textAlign: { lg: 'left' },
    },
  },

  exploreBtn: [
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      bottom: '-2rem',
      mt: { sm: '-4rem' },
      //cursor: 'pointer',
      zIndex: '3',
    },

    {
      '&:hover': {
        '&:after': {
          content: "''",
          width: { xs: '240px', sm: '300px', lg: '360px' },
          height: { xs: '240px', sm: '300px', lg: '360px' },
          borderRadius: '50%',
          bgcolor: COLORS.explore_btn_hover,
          transition: 'ease-in-out 1s',
          position: 'absolute',
          top: { xs: '-3rem', lg: '-8rem' },
          zIndex: '1',
        },
      },
    },
  ],

  exploreText: {
    position: 'absolute',
    top: { xs: '38%', lg: '-5rem' },
    fontWeight: '400',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    //height: '30px',
    textTransform: 'uppercase',
    color: COLORS.main_black,
    width: { xs: '150px', sm: '210px', lg: '274px' },
    height: { xs: '150px', sm: '210px', lg: '274px' },
    borderRadius: '50%',
    bgcolor: COLORS.main_white,
    zIndex: '2',
    boxShadow: `0px 0px 28px 4px ${COLORS.explore_boxshadow}`,
  },
}

export { styles }
