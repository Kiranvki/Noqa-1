import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Colors } from "../theme";
import banner from "../../images/banner.png";

export const BannerContainer = styled(Box)(({ theme }) => ({
  background: `url(${banner})`,
  width: "100%",
  height: "80vh",
  //   marginTop:"50px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const BannerContent = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "50px",
  textAlign: "center",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 0px 5px 0px",
  marginTop: "150px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "50px",
    lineHeight: 1.5,
    fontSize: "30px",
  },
}));

export const BannerActionContainer = styled(Box)(() => ({
  // padding: "5px 30px 5px 30px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const BannerAction = styled(Button)(({ theme }) => ({
  color: Colors.secondary,
  borderRadius: "500px",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "140%",
  background: "#fff",
  letterSpacing: "1px",
  padding: "10px 20px",
  textTransform: "uppercase",
  "&:hover": {
    color: Colors.primary,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const BannerImgContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // padding: "30px 30px 5px 30px ",
  marginTop: "20px",
  width: "100%",
}));


