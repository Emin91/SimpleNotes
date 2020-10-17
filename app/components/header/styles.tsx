import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 0.07,
      width: '100%',
      backgroundColor: colors.mainPink,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    headerTitle: {
      fontFamily: fonts.baloo,
      fontSize: 24,
      color: colors.white,
    },
  });
  return styles;
};
