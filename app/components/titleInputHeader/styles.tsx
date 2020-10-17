import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { fonts } from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
    inputWrapper: {
      height: 50,
      paddingTop: 5,
      paddingRight: 5,
      borderRadius: 8,
      paddingLeft: 10,
      justifyContent: 'center',
      backgroundColor: colors.darkPink,
    },
    input: {
      height: 80,
      fontSize: 24, 
      color: 'white',
      fontFamily: fonts.baloo,
      textAlignVertical: 'center',
    },
  });
  return styles;
};
