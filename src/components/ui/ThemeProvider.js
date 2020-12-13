import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import React, { useCallback, useContext, useState } from 'react';

import themes from '../../theme';
import GlobalStyles from '../../theme/globalStyles';

const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = useCallback(() => {
        setTheme(v => {
            if (v === 'dark') {
                return 'light';
            }
            return 'dark';
        });
    }, [setTheme]);
    return (
        <ThemeContext.Provider
          value={{
              setTheme,
              theme,
              toggleTheme
          }}
        >
            <StyledThemeProvider theme={themes[theme]}>
                <GlobalStyles />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
      );
};

export const useTheme = () => useContext(ThemeContext);