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
      paddingRight: 5,
      borderRadius: 8,
      paddingLeft: 35,
      justifyContent: 'center',
      backgroundColor: colors.darkPink,
    },
    icon: {
      left: 10,
      position: 'absolute',
    },
    input: {
      height: 50,
      fontSize: 24, 
      color: 'white',
      textAlignVertical: 'center',
      fontFamily: fonts.didactGothic,
    },
  });
  return styles;
};
