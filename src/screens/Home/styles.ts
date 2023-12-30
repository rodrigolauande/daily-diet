import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    
    padding: 0px 24px;
`

export const Title = styled.Text`
    margin-bottom: 8px;
    margin-top: 32px;
    padding-bottom: 10px;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BODY.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1}
    `};
`;
