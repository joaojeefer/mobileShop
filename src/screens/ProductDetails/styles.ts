import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.dark,
  },
  backButton: {
    marginBottom: metrics.spacing.small,
    paddingLeft: metrics.spacing.small,
  },
  scrolledContent: {
    flexGrow: 1,
  },
  imageArea: {
    height: 300,
    width: '100%',
  },
  contentArea: {
    flex: 1,
    paddingVertical: metrics.spacing.x_small,
    paddingHorizontal: metrics.spacing.medium,
  },
  nameText: {
    fontFamily: 'Nunito-Regular',
    fontSize: metrics.font_size.medium,
    lineHeight: metrics.spacing.large,
    color: colors.secondary.light,
    marginBottom: metrics.spacing.small,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.spacing.medium,
    paddingBottom: metrics.spacing.xx_small,
  },
  priceText: {
    fontFamily: 'Nunito-Bold',
    fontSize: metrics.font_size.small,
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.default,
  },
  aditionalInfoText: {
    fontFamily: 'Nunito-Regular',
    fontSize: metrics.font_size.xx_small,
    color: colors.secondary.dark,
  },
  stockText: {
    fontFamily: 'Nunito-Regular',
    fontSize: metrics.font_size.xx_small,
    lineHeight: metrics.spacing.small,
    color: colors.secondary.dark,
  },
  interactionArea: {
    height: metrics.spacing.large,
    flexDirection: 'row',
    alignItems: 'flex-end',
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
