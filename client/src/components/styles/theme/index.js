import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Box, List, ListItemText, Button, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Colors = {
  primary: "#fff",
  secondary: "#000",
  white: "#fff",
  black: "#000",
  // gray: "#666565",
  light: "rgba(250, 126, 30,0.8)",
};


export const Separator = styled(Box)(() => ({
  width: "100%",
  margin: "4% 0%",
}));

export const CommSeparator = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    margin: "5% 0%",
  },
}));

export const CommonHeader = styled(Typography)(() => ({
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "40px",
  fontStyle: "normal",
  lineHeight: "130%",
  letterSpacing: "2px",
}));

export const CommonDes = styled(Typography)(() => ({
  color: "#616060",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "28px",
  fontStyle: "normal",
  lineHeight: "125%",
  letterSpacing: "1.4px",
}));

export const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat"`,
  },
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.light,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.secondary,
          color: Colors.primary,
          borderRadius: "0px 100px 0px 0px",
          borderRight: `2px solid ${Colors.primary}`,
        },
      },
    },
  },
});
