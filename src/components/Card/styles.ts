import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { CardColor } from ".";

export const Container = styled.View<CardColor>`
    width: 100%;
    height: 102px;

    border-radius: 8px;
    padding: 16px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme, bg }) => {
        if (bg === 'GRAY') return theme.COLORS.GRAY_6
        if (bg === 'GREEN') return theme.COLORS.GREEN_LIGHT
        if (bg === 'RED') return theme.COLORS.RED_LIGHT
        else return theme.COLORS.GRAY_6
    }}

    
`;

export const ButtonLeft = styled.TouchableOpacity`
    position: absolute;
    top: 8px;
    left: 8px;
`

export const  IconLeft = styled(ArrowLeft).attrs<CardColor>(({ theme, bg }) => ({
    size: 24,
    color:
			bg === 'GREEN'
				? theme.COLORS.GREEN_DARK
				: bg === 'RED'
				? theme.COLORS.RED_DARK
				: theme.COLORS.GRAY_1,
	})
    )<CardColor>``;

export const ButtonRight = styled.TouchableOpacity`
    position: absolute;
    top: 8px;
    right: 8px;
`

export const  IconRight = styled(ArrowUpRight).attrs<CardColor>(({ theme, bg }) => ({
    size: 24,
    color:
			bg === 'GREEN'
				? theme.COLORS.GREEN_DARK
				: bg === 'RED'
				? theme.COLORS.RED_DARK
				: theme.COLORS.GRAY_1,
	})
    )<CardColor>``;

export const Title = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1}
    `};
`;

export const SubTitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2}
    `};
`;
