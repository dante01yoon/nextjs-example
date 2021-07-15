import { ThemeProvider as OrigThemeProvider, createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
`;

const theme = {

}

const ThemeProvider: React.FC = ({ children }) => {
  return (<>
    <GlobalStyle />
    <OrigThemeProvider theme={theme}>{children}</OrigThemeProvider>
  </>)
}

export default ThemeProvider;