import { createMuiTheme } from '@material-ui/core/styles';
import orange from "@material-ui/core/colors/orange";
import amber from "@material-ui/core/colors/amber";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: orange[500],
      contrastText: '#FFF',
    },
    secondary: {
      main: amber[500],
      contrastText: '#fff'
    },
  }
});

export default theme;
