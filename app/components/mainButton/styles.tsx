import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      paddingHorizontal: 80,
      justifyContent: 'center',
    },
    buttonWrapper: {
      height: 54,
      width: '100%',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.weet,
    },
    buttonTitle: {
      fontSize: 36,
      color: colors.white,
      fontFamily: fonts.betmRounded,
    }
  });
  return styles;
};
