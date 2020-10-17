import {StyleSheet} from 'react-native';
import {colors} from '../../assets/constants/colors';
import {fonts} from '../../assets/constants/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.mainPink,
    },
  });
  return styles;
};
