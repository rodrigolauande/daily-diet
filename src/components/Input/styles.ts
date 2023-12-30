import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    flex: 1
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_2}
    `}
`;

export const InputContainer = styled.TextInput`
    height: 50px;
    width: 100%;

    padding: 14px;
    margin-bottom: 4px;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};

    align-items: flex-start;
    text-align: left;
`;