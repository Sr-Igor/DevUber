import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    padding: 0px ${theme.spacings.medium};
    align-items: center;
    justify-content: center;
  `}
`;

export const TiltedArea = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    height: 120px;
    padding: ${theme.spacings.medium};
  `};
`;

export const TitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
  `}
`;

export const TitleAnimated = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.subTitle};
  `}
`;

export const LoginArea = styled.View`
  flex: 1;
  width: 100%;
`;
