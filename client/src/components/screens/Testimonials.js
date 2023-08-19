import React from "react";
import { Grid, Stack, Typography, Box, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Separator, CommonHeader, theme } from "../styles/theme";
import img from "../images/Frame 38557.png";
import img1 from "../images/Group 21027.png";
import edit from "../images/edit.png";
import { Imgcarousel, Clientcarousel } from "../utili/carousal/Imgcarousel";
import { CardHeader, CardDes } from "../styles/products";

export default function Testimonials() {
  return (
    <>
      <Container maxWidth="xl">
        <Separator />
        {/* Damage Protection Plans headers */}
        {/* <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">
                Why NoQA Warranty?
              </CommonHeader>
            </Box>
          </Grid>
        </Grid> */}

        {/* image container */}

        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                flexDirection: "row",
                paddingY: "10px",
                [theme.breakpoints.down("sm")]: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  flexDirection: "column",
                },
              }}
            >
              <div>
                <img src={img} alt="family image" width="100%" />
              </div>
              <div style={{ background: "#4FC5EB" }}>
                <img
                  src={img1}
                  alt="family image"
                  width="100%"
                  style={{ padding: "20px 10px 0px 0px" }}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* testimonial */}
      <Container maxWidth="xl">
        <Separator />
        {/* Damage Protection Plans headers */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">
                See What our Clients Says
              </CommonHeader>
            </Box>
          </Grid>
        </Grid>

        {/* image container */}

        <Grid container>
          <Grid item md={12} sm={12} xm={12} lg={12} sx={{ paddingX: "10px" }}>
            <Imgcarousel />
          </Grid>
        </Grid>
      </Container>

      {/* client */}

      <Container maxWidth="xl">
        <Separator />
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">Our Clients</CommonHeader>
            </Box>
          </Grid>
        </Grid>
        <Separator />
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12} sx={{ paddingX: "50px" }}>
            <Clientcarousel />
          </Grid>
        </Grid>
      </Container>

      {/* become a parter page */}

      <Container maxWidth="xl">
        <Separator />
        {/* claim process  */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">
                Become Partners
              </CommonHeader>
            </Box>
          </Grid>
        </Grid>

        {/* claim process Plans: */}

        <Grid container spacing={3} sx={{ paddingX: "30px" }}>
          <Grid item md={5} sm={12} xm={12} lg={5}>
            <Box
              component="div"
              sx={{
                paddingY: "20px",
              }}
            >
              <Link href="/menulist">
                <Card
                  elevation={3}
                  sx={{
                    boxSizing: "border-box",
                    padding: "0px",
                    borderRadius: "0px",
                    height: "350px",
                    backgroundColor: "#F0F0F0",
                    width:"120%",
                    [theme.breakpoints.down("md")]:{
                        width:"100%",
                    }
                   
                    
                  }}
                >
                  <Avatar src={edit} sx={{ margin: "30px" }} />
                  <CardContent>
                    <CardHeader
                      sx={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "120%",
                        marginBottom: "40px",
                        textAlign: "left",
                        
                      }}
                      gutterBottom
                    >
                      Become a reseller
                    </CardHeader>
                    <CardDes gutterBottom sx={{ marginBottom: "20px" }}>
                    Unmatched protection and value for your customers products.
                    </CardDes>
                    <Box className="port-content1">
                      <Typography
                        CommonHeader1
                        sx={{
                          fontSize: "20px",
                          fontWeight: "700",
                          lineHeight: "140%",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                      >
                        Continue
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={2} sm={12} xm={12} lg={2}>
            <Box
              component="div"
              sx={{
                background: "linear-gradient(136deg, #92B0FD 0%, #366BF5 100%)",
                height:"100%",
                zIndex:-1,
                position:"relative"
              }}
            ></Box>
          </Grid>
          <Grid item md={5} sm={12} xm={12} lg={5}>
            <Box
              component="div"
              sx={{
                paddingY: "20px",
              }}
            >
              <Link href="/menulist">
                <Card
                  elevation={3}
                  sx={{
                    boxSizing: "border-box",
                    padding: "0px",
                    borderRadius: "0px",
                    height: "350px",
                    backgroundColor: "#F0F0F0",
                    
                  }}
                >
                  <Avatar src={edit} sx={{ margin: "30px" }} />
                  <CardContent>
                    <CardHeader
                      sx={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "120%",
                        marginBottom: "40px",
                        textAlign: "left",
                      }}
                      l
                      // style={{ textAlign: "left", marginBottom: "10px" }}
                      gutterBottom
                    >
                      Become a Service Provider
                    </CardHeader>
                    <CardDes gutterBottom sx={{ marginBottom: "20px" }}>
                    Sign-up to become one of our authorized national service partners.
                    </CardDes>
                    <Box className="port-content1">
                      <Typography
                        CommonHeader1
                        sx={{
                          fontSize: "20px",
                          fontWeight: "700",
                          lineHeight: "140%",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                      >
                        Continue
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
