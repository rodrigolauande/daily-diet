import styled, { css } from "styled-components/native";
import { ButtonType } from ".";

// export type ButtonTypeStylesProps = 'SOLID' | 'OUTLINE' & 'WHITE' | 'BLACK'

// type Props = {
//     type: ButtonTypeStylesProps
//     texto: ButtonTypeStylesProps
// }

export const Container = styled.TouchableOpacity<ButtonType>`
    width: 100%;
    height: 50px;

    flex-direction: row;
    justify-content: center;
    align-items: center;


    border-color: ${({ theme }) => theme.COLORS.GRAY_1};
    border-width: 1px;
    border-radius: 6px;

    background-color: ${({ theme, type, isActive }) => {
        if (type === 'SOLID') {
            return isActive ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_2
        }
        if (type === 'OUTLINE') {
            return isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_5
        }
    }};    
`;

export const Title = styled.Text`
    align-items: flex-start;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};

    color: ${({ theme, write, isActive }) => {
        if (write === 'WHITE') {
            return isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_5
        }
        if (write === 'BLACK') {
            return isActive ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_2
        }
    }};
`;

export const ContainerIcon = styled.View`
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
`


