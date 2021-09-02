import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    maxWidth: 350,
    flexDirection: 'row',
    borderRadius: metrics.radius.medium,
    backgroundColor: colors.primary.default,
  },
  imageArea: {
    height: 150,
    width: 120,
    borderTopLeftRadius: metrics.radius.medium,
    borderBottomLeftRadius: metrics.radius.medium,
  },
  infoArea: {
    flex: 1,
    padding: metrics.spacing.x_small,
  },
  nameText: {
    fontFamily: 'Nunito-Regular',
    fontSize: metrics.font_size.x_small,
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.light,
  },
  priceText: {
    fontFamily: 'Nunito-Bold',
    fontSize: metrics.font_size.x_small,
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.default,
  },
  addToCartButton: {
    position: 'absolute',
    height: metrics.spacing.large,
    width: metrics.spacing.large,
    bottom: metrics.spacing.x_small,
    right: metrics.spacing.x_small,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary.light,
    borderRadius: metrics.radius.small,
  },
});

export default styles;
