import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8E44AD",
    },
    secondary: {
      main: "#9575CD",
    },
  },
  typography: {
    fontWeightMedium: 600,
    // fontFamily: "'Nunito', sans-serif",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 17,
    h1: {
      fontSize: "2.7rem",
      fontWeight: 700,
      color: "#000000",
    },
    h2: {
      fontSize: "2.0rem",
      fontWeight: 600,
      color: "#000000",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.25,
      color: "#000000",
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: 600,
      lineHeight: 1.25,
      color: "#000000",
    },
    body1: {
      fontSize: "1.15rem",
    },
    body2: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: "0.9rem",
      fontWceight: 400,
      // lineHeight: 1.5,
      color: "#85858B",
    },
    subtitle1: {
      fontSize: "1.0rem",
      fontWceight: 400,
      lineHeight: 1.5,
      color: "#85858B",
    },
    subtitle2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#BBBBC1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontSize: "1.15rem",
          lineHeight: 1.5,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: "12px",
          overflow: "hidden",
        },
      },
    },
  },
});

export default theme;
