import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 36,
      marginTop: 10,
      color: colors.light,
      fontFamily: fonts.baloo,
    },
  });
  return styles;
};
