import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => {theme.COLORS.GRAY_7}};

    padding: 0px 24px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: 40px;
    margin-bottom: 8px;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const SubTitle = styled.Text`
    margin-bottom: 40px;

    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;
