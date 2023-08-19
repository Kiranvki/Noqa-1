import React, { useRef } from "react";
import Slider from "react-slick";
import croimg from "../../images/successful-businessman 1.png";
import star from "../../images/Frame 38356.png";
import rightA from "../../images/rightA.png";
import leftA from "../../images/leftA.png";
import croma from "../../images/Croma.png";
import amazon from "../../images/amazon.png";
import edit from "../../images/edit.png";
import { Grid, Stack, Typography, Box, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader, CardDes } from "../../styles/products";

export function Imgcarousel() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={6} sm={12} xm={12} lg={6}>
              <div>
                <img src={croimg} className="img-fluid" />
                {/* <video
                    width="100%"
                    src={`https://cdn.dribbble.com/users/167575/videos/13115/comp_2_1.mp4`}
                    frameBorder="0"
                    allowFullScreen
                    title="404 Error"
                    loop
                    autoPlay
                    muted
                    playsInline
                /> */}
              </div>
            </Grid>
            <Grid item md={6} sm={12} xm={12} lg={6}>
              <div>
                <div style={{ padding: "0px 20px 0px 20px" }}>
                  <img src={star} className="img-fluid" />
                </div>
                <div style={{ padding: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "150.5%",
                      letterSpacing: "1px",
                      textAlign: "justify",
                    }}
                  >
                    “NoQA Warranty has been a game-changer for me. Their
                    extended warranty coverage has provided me with peace of
                    mind knowing that my devices are protected. The customer
                    service team has been exceptional in addressing my concerns
                    and ensuring a smooth claims process.”
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "20px",
                      color: "#0575E6",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "130.5%",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                    }}
                  >
                    Amith Desai
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={6} sm={12} xm={12} lg={6}>
              <div>
                <img src={croimg} className="img-fluid" />
              </div>
            </Grid>
            <Grid item md={6} sm={12} xm={12} lg={6}>
              <div>
                <img src={croimg} className="img-fluid" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Slider>
      <div className="d-flex flex-direction-row justify-content-center">
        <div className="p-3" onClick={previous}>
          <img src={leftA} alt="" width="50" />
        </div>
        <div className="p-3" onClick={next}>
          <img src={rightA} alt="" width="50" />
        </div>
      </div>
    </>
  );
}

export function Clientcarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
        <div className="">
          <img src={croma} className="img-fluid" />
        </div>
        <div className="">
          <img src={amazon} className="img-fluid" />
        </div>
        <div className="">
          <img src={croma} className="img-fluid" />
        </div>
        <div className="">
          <img src={croma} className="img-fluid" />
        </div>
        <div className="">
          <img src={croma} className="img-fluid" />
        </div>
        <div className="">
          <img src={amazon} className="img-fluid" />
        </div>
      </Slider>
    </>
  );
}

export function Blogcarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
        <Grid container spacing={3} direction={"row"} sx={{display:"flex",flexDirection:"row"}}>
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
                  // className="zoomer"
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
                      File a new
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
                  // className="zoomer"
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
                      File a new
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
                  // className="zoomer"
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
                      File a new
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
                  // className="zoomer"
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
                      File a new
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
        </Grid>
        <Grid container spacing={3} direction={"row"} sx={{display:"flex",flexDirection:"row"}}>
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
                  // className="zoomer"
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
                      File a new
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
                  // className="zoomer"
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
                      File a new
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
                  // className="zoomer"
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
                      File a new
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
                  // className="zoomer"
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
                      File a new
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
        </Grid>
        
        
      </Slider>
    </>
  );
}
