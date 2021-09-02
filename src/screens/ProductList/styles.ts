import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.dark,
    paddingVertical: metrics.spacing.x_small,
    paddingHorizontal: metrics.spacing.medium,
  },
  emptyArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginTop: metrics.spacing.small,
  },
  betweenItems: {
    marginVertical: metrics.spacing.xx_small,
  },
});

export default styles;
