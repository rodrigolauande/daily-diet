import { styled } from 'styled-components';
import { theme } from './src/theme';

declare module 'styded-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
}