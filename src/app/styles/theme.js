"use-client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#092791",
      secondary: "#0CB24A",
    },
  },
  typography: {
    fontFamily: "Poppins sans-serif",
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 600,
      md: 999,
      lg: 1100,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default theme;
