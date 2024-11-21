import { createContext, PropsWithChildren } from "react";

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';
  import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme } from "react-native";
  
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });



export const ThemeContext = createContext({
    isDark: false,
    theme: LightTheme
});


export const ThemeContextProvider = ({children}:PropsWithChildren)=> {
    const colorSchema = useColorScheme();
    const isDarkTheme = colorSchema === 'dark';
    const theme = isDarkTheme ? {...DarkTheme, fonts: { ...NavigationDarkTheme.fonts }} : {...LightTheme, fonts: { ...NavigationDefaultTheme.fonts }};
    // const theme = isDarkTheme ? DarkTheme : LightTheme;
    return(
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                {children}
            </NavigationContainer>
        </PaperProvider>
    )
}






