import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components";
import styled from "styled-components/native";
import { MealBackground, MealStatus } from ".";

export const Container = styled(SafeAreaView)<MealBackground>`
    flex: 1;
    background-color: ${({ theme, bg }) =>
        bg === 'GREEN'
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT
    };
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
`

export const Row = styled.View`
   

    margin-bottom: 24px;
    
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
   `} 
`;

export const SubTitle = styled.Text`

    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
   `} 
`;

export const Tag = styled.View`
    width: 150px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 50px;

    padding: 8px 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Status = styled.View<MealStatus>`
    width: 8px;
    height: 8px;
    
    margin-right: 8px;

	border-radius: 8px;

    background-color: ${({ theme, isOnTheDiet }) =>
        isOnTheDiet 
            ? theme.COLORS.GREEN_DARK 
            : theme.COLORS.RED_DARK
    };
`;
