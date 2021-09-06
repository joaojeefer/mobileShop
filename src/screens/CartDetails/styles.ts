import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.dark,
    paddingVertical: metrics.spacing.x_small,
    paddingHorizontal: metrics.spacing.medium,
  },
  backButton: {marginLeft: -3},
  emptyArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Exo2-Light',
    fontSize: metrics.font_size.large,
    lineHeight: metrics.spacing.x_large,
    color: colors.secondary.light,
  },
  scrolledContent: {
    flexGrow: 1,
    marginVertical: metrics.spacing.small,
  },
  betweenItems: {
    marginVertical: metrics.spacing.xx_small,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.spacing.small,
  },
  priceText: {
    fontFamily: 'Nunito-Bold',
    fontSize: metrics.font_size.small,
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.default,
  },
  emptyCartArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: metrics.spacing.small,
    height: metrics.spacing.large,
    width: '100%',
    borderRadius: metrics.radius.small,
    backgroundColor: colors.danger.dark,
  },
  emptyCartText: {
    fontFamily: 'Nunito-Regular',
    fontSize: metrics.font_size.x_small,
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.default,
  },
});

export default styles;
