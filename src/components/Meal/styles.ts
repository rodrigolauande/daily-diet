import styled, { css } from "styled-components/native";
import { MealType } from ".";

// export type StatusTypeStylesProps = 'GREEN' | 'RED'

// type Props = {
//     type: StatusTypeStylesProps
// }

export const Container = styled.Pressable`
    width: 100%;
    height: 55px;

    padding: 14px 16px 14px 14px;
    margin-bottom: 8px;

    align-items: center;
    align-content: flex-start;
    justify-content: space-between;
    flex-direction: row;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5}
`;

export const Divider = styled.View`
	width: 1px;
	height: 14px;
	margin: 0 12px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.BODY.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2}
    `}
`;

// export const Status = styled.View<Props>`
//     width: 14px;
//     height: 14px;

//     margin-left: 12px;
//     border-radius: 14px;

//     background-color: ${({ theme, type }) =>
//         (type === 'GREEN') ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
//     };
// `;

export const Status = styled.View<MealType>`
    width: 14px;
    height: 14px;

    margin-left: 12px;
    border-radius: 14px;

    background-color: ${({ theme, isOnTheDiet }) => {
        return isOnTheDiet 
            ? theme.COLORS.GREEN_MID 
            : theme.COLORS.RED_MID        
    }};
`;