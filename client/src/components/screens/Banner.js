import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  BannerAction,
  BannerActionContainer,
  BannerContainer,
  BannerContent,
  BannerImgContainer,
  BannerTitle,
  HomeContent,
} from "../styles/banner";
import { Box, Container, Grid, Typography } from "@mui/material";
import style from "../styles/css/style.css";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { NavLink, useNavigate } from "react-router-dom";
import banner from "../images/banner.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Banner() {
  const theme = useTheme();

  return (
    <>
      <BannerContainer sx={{ mt: 20 }}>
        <Container>
          <Grid container>
            <Grid item md={12} sm={12} xm={12} lg={12}>
              <BannerContent color="primary">
                Comprehensive Extended
                <br />
                Warranty plans for Your Family
              </BannerContent>
              <BannerActionContainer>
                <NavLink to={"/products"} style={{ textDecoration: "none" }}>
                  <BannerAction
                    variant="outlined"
                    size="small"
                    color="primary"
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    View Plan
                  </BannerAction>
                </NavLink>
              </BannerActionContainer>
            </Grid>
          </Grid>
        </Container>
      </BannerContainer>
    </>
  );
}

export default Banner;
