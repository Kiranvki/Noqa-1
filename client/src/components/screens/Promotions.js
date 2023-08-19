import React from "react";
import { Grid, Stack, Typography, Box, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CommonHeader, CommonDes, Separator } from "../styles/theme";
import famImg from "../images/Component 20.png";
import noqa from "../images/why NoQA.png";
import fame1 from "../images/Frame 38553 1.png";
import fame2 from "../images/setp2.png";
import fame3 from "../images/step3.png";
import fame4 from "../images/step4.png";
import edit from "../images/edit.png";
import { CardHeader, CardDes } from "../styles/products";

export default function Promotions() {
  return (
    <>
      <Container maxWidth="xl">
        <Separator />
        {/* Damage Protection Plans headers */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">
                Why NoQA Warranty?
              </CommonHeader>
            </Box>
          </Grid>
        </Grid>

        {/* image container */}

        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={8} sm={8} xm={6} lg={8}>
            <Box
              component="div"
              sx={{
                paddingY: "10px",
              }}
            >
              <img src={famImg} alt="family image" width="100%" />
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sm={4}
            xm={6}
            lg={4}
            sx={{ padding: "10px 0px 0px 0px" }}
          >
            <img src={noqa} alt="family image" className="noqa" width="100%" />
          </Grid>
        </Grid>
      </Container>

      {/* next page */}

      <Container maxWidth="xl" sx={{ backgroundColor: "#F0F0F0" }}>
        <Separator />
        {/* claim process  */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">
                Hassle-free and Convenient claims process.
              </CommonHeader>
            </Box>
          </Grid>
        </Grid>

        {/* claim process Plans: */}

        <Grid container spacing={3} sx={{ paddingX: "30px" }}>
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={fame1}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader
                      style={{
                        textAlign: "left",
                        color: "#FB0000",
                        fontWeight: 400,
                        marginBottom: "20px",
                      }}
                      gutterBottom
                    >
                      STEP 1:
                    </CardHeader>
                    <CardHeader
                      style={{ textAlign: "left", marginBottom: "10px" }}
                      gutterBottom
                    >
                      Easy Claim Registration
                    </CardHeader>
                    <CardDes gutterBottom>
                      Notify us via our app or website to register your claim
                      quickly and hassle-free.
                    </CardDes>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={fame2}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader
                      style={{
                        textAlign: "left",
                        color: "#FB0000",
                        fontWeight: 400,
                        marginBottom: "20px",
                      }}
                      gutterBottom
                    >
                      STEP 2:
                    </CardHeader>
                    <CardHeader
                      style={{ textAlign: "left", marginBottom: "10px" }}
                      gutterBottom
                    >
                      Convenient Device Pickup
                    </CardHeader>
                    <CardDes gutterBottom>
                      Sit back as we arrange a seamless pickup of your damaged
                      device from your doorstep.
                    </CardDes>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    height: "350px",
                    padding: "0px",
                    borderRadius: "0px",
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={fame3}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader
                      style={{
                        textAlign: "left",
                        color: "#FB0000",
                        fontWeight: 400,
                        marginBottom: "20px",
                      }}
                      gutterBottom
                    >
                      STEP 3:
                    </CardHeader>
                    <CardHeader
                      style={{ textAlign: "left", marginBottom: "10px" }}
                      gutterBottom
                    >
                      Expert Repair Service
                    </CardHeader>
                    <CardDes gutterBottom>
                      Rest easy knowing our skilled technicians will efficiently
                      repair your device to optimal condition.
                    </CardDes>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    height: "350px",
                    borderRadius: "0px",
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={fame4}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader
                      style={{
                        textAlign: "left",
                        color: "#FB0000",
                        fontWeight: 400,
                        marginBottom: "20px",
                      }}
                      gutterBottom
                    >
                      STEP 4:
                    </CardHeader>
                    <CardHeader
                      style={{ textAlign: "left", marginBottom: "10px" }}
                      gutterBottom
                    >
                      Timely Device Delivery
                    </CardHeader>
                    <CardDes gutterBottom>
                      Receive your fully repaired device promptly, delivered
                      right to your doorstep.
                    </CardDes>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* help You page */}


      <Container maxWidth="xl">
        <Separator />
        {/* claim process  */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">
                How can we help you?
              </CommonHeader>
            </Box>
          </Grid>
        </Grid>

        {/* claim process Plans: */}

        <Grid container spacing={3} sx={{ paddingX: "30px" }}>
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  {/* <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={edit}
                    alt="Order Online"
                  /> */}
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
                      File a new claim
                    </CardHeader>
                    <CardDes gutterBottom sx={{ marginBottom: "20px" }}>
                      Notify us via our app or website to register your claim
                      quickly and hassle-free.
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
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  {/* <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={edit}
                    alt="Order Online"
                  /> */}
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
                      Check Claim Status
                    </CardHeader>
                    <CardDes gutterBottom sx={{ marginBottom: "20px" }}>
                      Check status on an existing claim to see where your claim
                      is at in the process.
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
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  {/* <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={edit}
                    alt="Order Online"
                  /> */}
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
                      Raise a Servive Request
                    </CardHeader>
                    <CardDes gutterBottom sx={{ marginBottom: "20px" }}>
                      Have a balance on your account, or need to renew your
                      plan?
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
          <Grid item md={3} sm={6} xm={6} lg={3}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  {/* <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", padding: "10px" }}
                    image={edit}
                    alt="Order Online"
                  /> */}
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
                      Extend your Coverage
                    </CardHeader>
                    <CardDes gutterBottom sx={{ marginBottom: "20px" }}>
                      Register your Campus Store Protection Plan in a few easy
                      steps!
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
