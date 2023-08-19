import React from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import style from "../../styles/css/style.css";
import { CommonHeader, CommonDes, Separator } from "../../styles/theme";
import { CardHeader } from "../../styles/products";
import cardImg from "../../images/card-sample.png";
import arrowImg from "../../images/arrow_right.jpg";

export default function ProductsList() {
  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: "#F0F0F0" }}>
        <Separator />
        {/* Damage Protection Plans headers */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">
                Plans and Products
              </CommonHeader>
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box
              component="div"
              sx={{
                paddingY: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CommonDes>Plans and Products</CommonDes>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CommonDes sx={{ marginX: "20px" }}>
                  View all products
                </CommonDes>
                <Link href="/menulist">
                  <img src={arrowImg} alt="" />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Extended Warranty Plans: */}

        <Grid container spacing={3} sx={{ paddingX: "30px" }}>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Damage Protection Header */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box
              component="div"
              sx={{
                paddingY: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CommonDes>Damage Protection Plans</CommonDes>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CommonDes sx={{ marginX: "20px" }}>
                  View all products
                </CommonDes>
                <Link href="/menulist">
                  <img src={arrowImg} alt="" />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Damage Protection Plans */}
        <Grid container spacing={3} sx={{ paddingX: "30px" }}>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xm={6} lg={2}>
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
                    transition: "0.5s ease 0s, transform 0.5s ease 0s;",
                  }}
                  className="zoomer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ padding: "0px", marginY: "10px" }}
                    image={cardImg}
                    alt="Order Online"
                  />
                  <CardContent>
                    <CardHeader gutterBottom>Television</CardHeader>
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
