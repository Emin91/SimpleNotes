import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 0.73,
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    favWrapper: {
      flex: 0.03,
      backgroundColor: colors.darkPink,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
      justifyContent: 'center',
    },
    favLine: {
      width: '40%',
      height: '90%',
      backgroundColor: colors.blue,
      borderRadius: 60,
    },
    inputWrapper: {
      flex: 0.97,
      backgroundColor: colors.darkPink,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 30,
    },
    input: {
      height: '100%',
      fontFamily: fonts.balooTwo,
      fontSize: 14,
      color: colors.white,
    },
    favButton: {
      flex: 0.1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingRight: 6,
      paddingBottom: 6,
    },
  });
  return styles;
};
