import mobileBackground from '../../assets/home/background-home-mobile.jpg'
import tabletBackground from '../../assets/home/background-home-tablet.jpg'

import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  homeWrapper: {
    backgroundImage: { xs: `url(${mobileBackground})`, sm: `url(${tabletBackground})` },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: { xs: '1rem', sm: '12rem' },
    textAlign: 'center',
    position: 'relative',
  },

  homeTextBox: {
    width: { xs: SIZES.mobile_container_width, sm: SIZES.tablet_container_width },
    height: SIZES.home_text_box_height,
    mb: '5rem',
    mt: '8rem',
    p: '0.5rem',

    typographyFirst: {
      color: COLORS.light_blue,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontSize: '16px',
      mb: '1rem',
    },

    typographySecond: {
      color: COLORS.main_white,
      textTransform: 'uppercase',
      mb: '1rem',
      fontSize: { xs: '80px', sm: '140px' },
      letterSpacing: '5px',
    },

    typographyThird: {
      color: COLORS.light_blue,
      fontSize: '17px',
      lineHeight: { xs: '1.5rem', sm: '2rem' },
    },
  },

  exploreBtn: [
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      bottom: '-2rem',
      //cursor: 'pointer',
      zIndex: '3',
    },

    {
      '&:hover': {
        '&:after': {
          content: "''",
          width: { xs: '240px', sm: '300px' },
          height: { xs: '240px', sm: '300px' },
          borderRadius: '50%',
          bgcolor: COLORS.explore_btn_hover,
          transition: 'ease-in-out 1s',
          position: 'absolute',
          top: '-3rem',
          zIndex: '1',
        },
      },
    },
  ],

  exploreText: {
    position: 'absolute',
    top: '38%',
    fontWeight: '400',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    //height: '30px',
    textTransform: 'uppercase',
    color: COLORS.main_black,
    width: { xs: '150px', sm: '210px' },
    height: { xs: '150px', sm: '210px' },
    borderRadius: '50%',
    bgcolor: COLORS.main_white,
    zIndex: '2',
    boxShadow: `0px 0px 28px 4px ${COLORS.explore_boxshadow}`,
  },
}

export { styles }
