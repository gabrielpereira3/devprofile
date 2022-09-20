import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${RFValue(24)}px;
`;

export const LogoContainer = styled.View`
  max-width: 100%;
  max-height: ${RFValue(65)}px;
  margin-bottom: ${RFValue(70)}px;
`;

export const Logo = styled.Image`
  object-fit: contain;
  border-radius: ${RFValue(100)}px;
  background-color: white;
  max-width: 100%;
  max-height: 100%;
`;
