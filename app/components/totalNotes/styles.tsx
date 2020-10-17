import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    totalNotesWrapper: {
      flex: 0.03,
      alignItems: 'center',
      justifyContent: 'center',
    },
    totalText: {
      fontSize: 18,
      color: colors.white,
      fontFamily: fonts.balooBhaina,
    },
  });
  return styles;
};
