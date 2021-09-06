import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    maxWidth: 350,
    flexDirection: 'row',
  },
  imageArea: {
    height: 70,
    width: 70,
    borderRadius: metrics.radius.medium,
  },
  infoArea: {
    width: 120,
    paddingHorizontal: metrics.spacing.x_small,
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
  interactionArea: {
    position: 'absolute',
    right: 0,
    top: metrics.spacing.medium,
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
