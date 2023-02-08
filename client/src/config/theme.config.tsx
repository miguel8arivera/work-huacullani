import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { FC } from 'react';
import { ThemeProps } from '../types/types';

enum ThemePalette {
  BG = '#061320',
  FONT_GLOBAL = "'JetBrains Mono', monospace",
}

export const ThemeConfig: FC<ThemeProps> = function ({ children }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: ThemePalette.BG,
      },
    },
    typography: {
      fontFamily: ThemePalette.FONT_GLOBAL,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};
