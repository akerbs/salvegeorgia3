import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#38acf4",
      main: "#0798F2",
      dark: "#38acf4",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(0, 0, 0, 0.38)",
      main: "rgba(0, 0, 0, 0.54)",
      dark: " rgba(0, 0, 0, 0.87)",
      contrastText: "#fff",
    },
  },

  third: {
    backgroundColor: "rgba(255,255,255)",
    color: "rgba(0,0,0)",
  },

  typography: {
    fontFamily: ["sans-serif", "Fondamento"].join(","),
    fontSize: 14,
    body1bold: {
      fontWeight: "bold",
    },
    body2bold: {
      fontWeight: "bold",
    },
    // fontResp: {
    //   fontSize: 3,
    // },
    // "fontWeightLight": 300,
    // "fontWeightRegular": 400,
    // "fontWeightMedium": 500
  },
  // overrides: {

  //   MuiButton: {

  //     text: {
  //       // Some CSS
  //       color: 'tomato',
  //     },
  //   },
  // },
})

export default theme

// fairyGatesTheme.overrideThemeStyles = () => ({
//   a: {
//     color: #YourColorHere,
//     textDecoration: "none",
//     backgroundImage: "none",
//     textShadow: "none",
//   },
// })
