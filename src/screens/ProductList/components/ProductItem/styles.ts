import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors, metrics} from '../../../../styles';

interface ContainerProps {
  inCart: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 150px;
  width: 100%;
  max-width: 350px;
  flex-direction: row;
  background-color: ${colors.primary.default};
  border-radius: ${metrics.radius.medium}px;
  border-width: 2px;
  border-color: ${({inCart}: ContainerProps) =>
    inCart ? colors.primary.light : colors.primary.default};
`;

const styles = StyleSheet.create({
  imageArea: {
    height: 146,
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
