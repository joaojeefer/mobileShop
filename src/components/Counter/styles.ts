import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.spacing.large,
    flexDirection: 'row',
  },
  quantityText: {
    marginHorizontal: metrics.spacing.xx_small,
    textAlign: 'center',
    fontSize: metrics.font_size.small,
    color: colors.secondary.light,
  },
  counterButton: {
    height: metrics.spacing.medium,
    width: metrics.spacing.medium,
    borderRadius: metrics.radius.small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary.default,
  },
});

export default styles;
