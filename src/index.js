import React from "react";
import ReactDOM from "react-dom";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

let theme = createTheme({
  palette: {
    primary: {
      light: "#eb3333",
      main: "#E60000",
      dark: "#a10000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#555459",
      main: "#2b2a30",
      dark: "#1e1d21",
      contrastText: "#fff",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["VodafoneRg", "serif"].join(","),
  },
  direction: "rtl",
  overrides: {
    MuiCssBaseline: {
      "@global": {
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ".app": {
          width: "100%",
          height: "700px",
          overflow: "hidden",
        },
        "::placeholder": {
          color: "rgba(0, 0, 0, 0.87);",
          fontSize: "1.6rem",
          opacity: 1,
        },
        ":-ms-input-placeholder": {
          color: "rgba(0, 0, 0, 0.87);",
        },
        "::-ms-input-placeholder": {
          color: "rgba(0, 0, 0, 0.87);",
        },
        ".MuiFormControlLabel-label": {
          fontSize: "1.2rem !important",
        },
        ".MuiFormGroup-root": {
          marginTop: 24,
          marginRight: 2,
        },
        ".list-item": {
          position: "relative",
          paddingLeft: 32,
        },
        ".list-item-left": {
          position: "relative",
          paddingLeft: 32,
        },
        ".list-item-icon": {
          position: "absolute",
          left: 0,
          top: -6,
        },
        ".list-item-icon-left": {
          position: "absolute",
          left: 0,
          top: 0,
        },
        ".MuiTypography-body1": {
          fontWeight: "300 !important",
        },
        ".MuiTableCell-body": {
          fontSize: "1.2rem !important",
        },
        ".MuiTableCell-head": {
          fontSize: "1.6rem !important",
        },
        ".slide-navigations": {
          paddingTop: 24,
          paddingBottom: 32,
        },
        ".MuiTableCell-root": {
          border: "1px solid rgba(224, 224, 224, 1)",
          minWidth: 220,
        },
        ".MuiContainer-root": {
          position: "relative",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();
