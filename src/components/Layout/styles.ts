import { css } from "styled-components";
import styled from "styled-components/native";

export type LayoutTypeStylesProps = 'GRAY' | 'GREEN' | 'RED'

type Props = {
    bg: LayoutTypeStylesProps
}

export const Container = styled.View<Props>`
    flex: 1;
    background-color: ${({ theme, bg }) => {
        bg === 'GREEN' 
        ? theme.COLORS.GREEN_LIGHT
        : bg === 'RED'
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_6
    }}
    
    /* background-color: ${({ theme, type }) => {
        if (type === 'BASE') return theme.COLORS.GRAY_6
        if (type === 'PRIMARY') return theme.COLORS.GREEN_LIGHT
        if (type === 'SECONDARY') return theme.COLORS.RED_DARK
        else return theme.COLORS.GRAY_6
    }} */
`;

export const Header = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
	padding: 50px 24px 20px;
`

export const Back = styled.TouchableOpacity`
    width: 15%;
`;

export const Title = styled.Text`
    /* ${({ theme }) => css` {
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        line-height: ${theme.LINE_HEIGHT.LG};
    }`} */
    width: '60%';
    text-align: center;
`;

export const Main = styled.View`
	flex: 1;
	align-items: center;

	padding: 40px 24px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_7};

	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
`
