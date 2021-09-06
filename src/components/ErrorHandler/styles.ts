import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Exo2-Light',
    fontSize: metrics.font_size.large,
    lineHeight: metrics.spacing.x_large,
    color: colors.secondary.light,
    textAlign: 'center',
  },
  descriptionText: {
    fontFamily: 'Nunito-Regular',
    fontSize: metrics.font_size.x_small,
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.light,
    textAlign: 'center',
  },
});

export default styles;
