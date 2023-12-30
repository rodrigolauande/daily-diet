import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components";
import styled from "styled-components/native";
import { StatisticBackground } from ".";

export const Container = styled(SafeAreaView)<StatisticBackground>`
    flex: 1;
    background-color: ${({ theme, bg }) => 
        bg === 'GREEN' 
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT
    };
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 19px;
`;

export const Row = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;
`;