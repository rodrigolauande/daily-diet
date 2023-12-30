import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Form = styled.ScrollView.attrs(() => ({
	showsVerticalScrollIndicator: false,
}))`
	flex: 1;
	width: 100%;
	margin-bottom: 20px;
`

export const Row = styled.View`
    margin: 12px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2}
   `} 
`

