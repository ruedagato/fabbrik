import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Router from "containers/Router";
import UserProfile from "containers/UserProfile";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#054445",
    },
    secondary: {
      main: "#f7b32a",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <UserProfile>
      <Router />
    </UserProfile>
  </ThemeProvider>
);

export default App;
