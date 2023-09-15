import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useThemeStyled
} from 'styled-components';
import theme, { Theme } from '.';

const useTheme = (): Theme => {
  return useThemeStyled() as unknown as never;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export { ThemeProvider, useTheme };
