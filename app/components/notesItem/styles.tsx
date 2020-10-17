import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 150,
      backgroundColor: colors.darkPink,
      flexDirection: 'row',
      marginTop: 10,
      borderRadius: 12,
    },
    favWrapper: {
      flex: 0.03,
      justifyContent: 'center',
    },
    favLine: {
      width: '40%',
      height: '80%',
      backgroundColor: colors.blue,
      borderRadius: 60,
    },
    titleWrapper: {
      flex: 0.85,
      paddingTop: 2,
    },
    titleText: {
      fontSize: 18,
      fontFamily: fonts.baloo,
      color: colors.white,
    },
    dateText: {
      fontSize: 14,
      fontFamily: fonts.bhavuka,
      color: colors.white,
    },
    iconsWrapper: {
      flex: 0.25,
      paddingTop: 3,
      paddingRight: 3,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    descriptionWrapper: {
      paddingRight: 6,
      paddingTop: 3,
    },
    descriptionText: {
      fontSize: 14,
      fontFamily: fonts.balooTwo,
      color: colors.white,
    },
  });
  return styles;
};
