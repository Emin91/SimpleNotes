import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    mainWrapper: {
      flex: 0.7,
      paddingTop: 10,
      paddingHorizontal: 20,
      justifyContent: 'space-evenly',
    },
    welcome: {
      fontSize: 64,
      color: colors.white,
      fontFamily: fonts.circeRounded,
    },
    buttonWrapper: {
      flex: 0.3,
      paddingHorizontal: 30,
      justifyContent: 'center',
    },
    nextButton: {
      height: 58,
      width: '100%',
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.nextButton,
    },
    nextButtonText: {
      fontSize: 30,
      color: colors.white,
      fontFamily: fonts.balooPaajai,
    },
    nextButtonArrow: {
      paddingRight: 10, 
      position: 'absolute',
      alignSelf: 'flex-end',
    },
  });
  return styles;
};
