import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Colors } from "../theme";


export const CardHeader = styled(Typography)(() => ({
  color: "#333",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "125%",
  letterSpacing: "0.8px",
  textTransform:"uppercase",
  textAlign:"center"

}));

export const CardDes = styled(Typography)(() => ({
  color: "#333",
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "141.5%",
  letterSpacing: "0.8px",
  textTransform:"capitalize",

}));
