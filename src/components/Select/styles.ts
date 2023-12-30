import styled, { css } from "styled-components/native";

export type SelectTypeStylesProps = 'PRIMARY' | 'SECONDARY' | 'BASE'

type Props = {
    type: SelectTypeStylesProps
}

export const Container = styled.Pressable<Props>`
    width: 100%;
    height: 50px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    border-width: 1px;
    /* border-color: ${({ theme, type, isSelected }) => {
        return isSelected
            ? type === 'PRIMARY'
                ? theme.COLORS.GREEN_DARK 
                : theme.COLORS.RED_DARK
            : theme.COLORS.GRAY_6
    }}; */
    border-color: ${({ theme, type, isSelected }) => {
        if (type === 'PRIMARY') {
            return isSelected ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_6
        }
        if (type === 'SECONDARY') {
            return isSelected ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_6
        }
    }}; 

    /* background-color: ${({ theme, type, isSelected }) => {
        return isSelected
        ? type === 'PRIMARY'
            ? theme.COLORS.GREEN_LIGHT 
            : theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_6
    }};   */
    background-color: ${({ theme, type, isSelected }) => {
        if (type === 'PRIMARY') {
            return isSelected ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_6
        }
        if (type === 'SECONDARY') {
            return isSelected ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6
        }
    }};  
`;

export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;

    margin-right: 6px;

	border-radius: 8px;

    background-color: ${({ theme, type }) =>
        // type === 'PRIMARY' 
        //     ? theme.COLORS.GREEN_DARK
        //     : theme.COLORS.RED_DARK
        (type === 'PRIMARY') ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
    };
`;


export const Title = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1}
   `} 
`