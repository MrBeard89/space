import mobileBackground from '../../assets/home/background-home-mobile.jpg'
import { COLORS } from '../../constants/colors'

import { SIZES } from '../../constants/sizes'

const styles = {
  homeWrapper: {
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

  homeTextBox: {
    width: SIZES.mobile_container_width,
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
      fontSize: '80px',
      letterSpacing: '5px',
    },

    typographyThird: {
      color: COLORS.light_blue,
      fontSize: '17px',
      lineHeight: '1.5rem',
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
          width: '240px',
          height: '240px',
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
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    bgcolor: COLORS.main_white,
    zIndex: '2',
    boxShadow: `0px 0px 28px 4px ${COLORS.explore_boxshadow}`,
  },
}

export { styles }
