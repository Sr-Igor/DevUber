import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.dark};
    justify-content: center;
    align-items: center;
  `}
`;

export const Loading = styled.ActivityIndicator``;

export const LabelButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    text-align: center;
  `}
`;
