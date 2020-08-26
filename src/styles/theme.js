import { createMuiTheme } from "@material-ui/core/styles"
import green from "@material-ui/core/colors/green"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#016450",
    },
    secondary: {
      main: green[500],
    },
  },
  // Navigation Bar
  nav: {
    title: {
      fontType: "Lato",
      paddingBottom: "0px",
      display: "none",
    },
    div: {
      position: "static",
      height: `2.5em`,
    },
    app: {
      background: `linear-gradient(45deg,#016450,#02818A,#3690C0, #F6EFF7)`,
      marginBottom: `1.45rem`,
      position: `-webkit-sticky`,
      width: `100%`,
    },
  },
  //Generic theme
  generic: {
    fontType: "Latio",
  },
  // Page
  page: {
    backgroundColor: "#F5F5F5",
    topItem: {
      paddingTop: "2em",
    },
  },
})

export default theme
