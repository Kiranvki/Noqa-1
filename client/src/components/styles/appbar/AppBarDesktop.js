import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NavLink, useNavigate } from "react-router-dom";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import {
  AppBarContainer,
  AppBarHeader,
  MyList,
  AdminAppBarContainer,
  SubAppBarContainer,
  SubList,
} from ".";
// import { GlobalState, useGlobalState } from '../../GlobalContext';
import Link from "@mui/material/Link";
import { Colors } from "../theme";
// import axios from 'axios'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../images/logo.png";
import location from "../../images/location.png";
import style from "../css/style.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import { Container, Grid, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img1 from "../../images/phone_card.png";
import img2 from "../../images/phone_2.png";
import img3 from "../../images/ai.png";
import img4 from "../../images/image 77.png";
import img5 from "../../images/image 78.png";
import img6 from "../../images/image 79.png";
import img7 from "../../images/image 80.png";
import img8 from "../../images/image 81.png";

function AppBarDesktop({ matches }) {
  // const context = useContext(GlobalState);

  // const { setShowSearchBar } = context

  // const [isLogged, setIsLogged] = context.authApi.isLogged;
  // const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  // const [isUser, setIsUser] = context.authApi.isUser;
  // const [cart, setCart] = context.authApi.cart;
  // const [anchorEl, setAnchorEl] = useState(null);

  // const navigate = useNavigate();

  // const logoutUser = async () => {
  //   if (window.confirm(`Are you sure to logout`)) {
  //     await axios.get(`/api/v1/auth/logout`);
  //     localStorage.clear();
  //     if (isAdmin) {
  //       setIsAdmin(false);
  //     }
  //     if (isUser) {
  //       setIsUser(false);
  //     }
  //     setIsLogged(false);
  //     toast.success('Successfully Logout')
  //     navigate('/')
  //   } else {
  //     toast.warning('logout terminated')
  //   }
  // }

  // const commonRoute = (props) => {
  //   const open = Boolean(anchorEl);
  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  //   return (
  //     <AdminAppBarContainer>
  //       <AppBarHeader>
  //         <Link href="home">
  //           <IconButton
  //             sx={{ display: { xs: "none", sm: 'block', md: "block" } }}
  //           >
  //             <FoodBankOutlinedIcon
  //               sx={{ color: "#fa7e1e", fontSize: "30px" }}
  //             />

  //           </IconButton>
  //         </Link>
  //         <Link href="home" sx={{ textDecoration: "none", color: Colors.secondary }}>Food-Bang</Link>
  //       </AppBarHeader>
  //       <Box>
  //         <MyList type="row">
  //           <NavLink to={"/home"} className="ModNav">Home</NavLink>
  //           <Button
  //             id="basic-button"
  //             onClick={handleClick}
  //             endIcon={<KeyboardArrowDownIcon />}
  //             sx={{ marginRight: isUser ? "0px" : "10px", fontSize: 20, marginTop: "5px", textTransform: "capitalize" }}
  //           >
  //             Accounts
  //           </Button>
  //           <Menu
  //             id="basic-menu"
  //             anchorEl={anchorEl}
  //             open={open}
  //             onClose={handleClose}
  //           >

  //             {/* {
  //                 isUser ? <Button size='small' startIcon={<DashboardIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}><NavLink to={`/user/dashboard`} style={{ textDecoration: "none", textTransform: "capitalize", fontSize: "15px", color: "black", fontWeight: "bold" }}>UserDashboard</NavLink></Button> : null
  //               } */}
  //             {
  //               isAdmin ?
  //                 <NavLink to={`/admin/dashboard`} style={{ textDecoration: "none" }}>
  //                   <MenuItem onClick={handleClose}>
  //                     <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<DashboardIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>AdminDashboard</Button>
  //                   </MenuItem></NavLink> : null
  //             }

  //             <NavLink to={`/profile`} style={{ textDecoration: "none" }}>
  //               <MenuItem onClick={handleClose}>
  //                 <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<AccountCircleIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Profile</Button>
  //               </MenuItem>
  //             </NavLink>

  //             <NavLink to={`/products`} style={{ textDecoration: "none" }}>
  //               <MenuItem onClick={handleClose}><Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<ListAltIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Menu</Button></MenuItem>
  //             </NavLink>

  //             {
  //               isAdmin ? (<NavLink to={`/users`} style={{ textDecoration: "none" }}>
  //                 <MenuItem onClick={handleClose}>
  //                   <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<GroupIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Users</Button>
  //                 </MenuItem>
  //               </NavLink>) : null
  //             }

  //             {
  //               isAdmin ?
  //                 (
  //                   <NavLink to={`/admin/allOrders`} style={{ textDecoration: "none" }}>
  //                     <MenuItem onClick={handleClose}>
  //                       <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<CachedIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Orders</Button>
  //                     </MenuItem>
  //                   </NavLink>) : (
  //                   <NavLink to={`/orders`} style={{ textDecoration: "none" }}>
  //                     <MenuItem onClick={handleClose}>
  //                       <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<CachedIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Orders</Button>
  //                     </MenuItem>
  //                   </NavLink>)
  //             }
  //             <NavLink to={`/`} onClick={logoutUser} style={{ textDecoration: "none" }}>
  //               <MenuItem onClick={handleClose}>
  //                 <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<LogoutIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Logout</Button>
  //               </MenuItem>
  //             </NavLink>
  //           </Menu>
  //           <Box>

  //             {
  //               isAdmin ? null : <NavLink to={`/product/cart`} style={{ textDecoration: "none" }}><Action matches={matches} /></NavLink>
  //             }
  //           </Box>
  //         </MyList>
  //       </Box>
  //     </AdminAppBarContainer >
  //   )
  // }

  return (
    <>
      <AppBarContainer>
        {/* <AppBarHeader> */}
        <Box sx={{ marginLeft: "30px" }}>
          <Link href="home">
            <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
              <img src={logo} alt="logo" width={"80%"} />
            </Box>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" }, marginRight: "30px" }}>
          <MyList type="row">
            <NavLink to={"/home"} className="ModNav">
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                {/* <Avatar
                alt="location"
                src={location}
                sx={{ width: "40px", height: "40px" }}
              /> */}
                <Button
                  color="secondary"
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: "500px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  startIcon={<LocationOnIcon sx={{ color: "#fa7e1e" }} />}
                >
                  Mumbai
                </Button>
              </Box>
            </NavLink>
            <NavLink to={"/about"} className="ModNav">
              <Button
                color="secondary"
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: "500px",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "black",
                  },
                }}
                startIcon={<AccountBoxIcon />}
              >
                Customer SIGN IN
              </Button>
            </NavLink>
            <NavLink to={"/menulist"} className="ModNav">
              <Button
                color="secondary"
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: "500px",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "black",
                  },
                }}
                startIcon={<AccountBoxIcon />}
              >
                Partner SIGN IN
              </Button>
            </NavLink>

            {/* <Action matches={matches} /> */}
          </MyList>
        </Box>
      </AppBarContainer>
      <SubAppBarContainer sx={{ mt: 12 }}>
        <Grid container>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box
              sx={{
                height: "64px",
                background: "#424242",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SubList type="row">
                <div class="dropdown show">
                  <a
                    class="btn dropdown-toggle navBtn"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Button className="btnText" variant="text">
                      PLANS AND PRODUCTS
                    </Button>
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img1}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography gutterBottom className="navCardheader">
                              Extended Warranty Plans
                            </Typography>
                            <Typography
                              className="navCardCon"
                              // variant="body6"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Protect your device with added coverage against
                              unexpected repairs or breakdowns.
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img2}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography gutterBottom className="navCardheader">
                              Damage Protection
                            </Typography>
                            <Typography
                              className="navCardCon"
                              // variant="body6"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Protect your device from liquid spills and
                              accidental damages
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                    </Box>
                  </div>
                </div>

                <div class="dropdown show">
                  <a
                    class="btn dropdown-toggle navBtn"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Button className="btnText" variant="text">
                      PARTNERS
                    </Button>
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img3}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography className="navCardheader" gutterBottom>
                              Authorized Resellers
                            </Typography>
                            <Typography
                              className="navCardCon"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Trusted sellers offering genuine products
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img4}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography gutterBottom className="navCardheader">
                              Certified Service Providers
                            </Typography>
                            <Typography
                              // variant="body6"
                              className="navCardCon"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Expert repair and maintenance services for your
                              devices.
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                    </Box>
                  </div>
                </div>

                <NavLink to={"/menulist"} className="navBtn btn">
                  <Button className="btnText" variant="text">
                    ACTIVATE YOUR PLAN
                  </Button>
                </NavLink>

                <NavLink to={"/menulist"} className="navBtn btn">
                  <Button className="btnText" variant="text">
                    REPAIR SERVICE
                  </Button>
                </NavLink>
                <div class="dropdown show">
                  <a
                    class="btn dropdown-toggle navBtn"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Button className="btnText" variant="text">
                      CLAIM SUPPORT
                    </Button>
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img5}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography className="navCardheader" gutterBottom>
                              File a New Claim
                            </Typography>
                            <Typography
                              className="navCardCon"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Hassle-free process to submit a new claim for your
                              covered device.
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img6}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography gutterBottom className="navCardheader">
                              Check Claim Status
                            </Typography>
                            <Typography
                              // variant="body6"
                              className="navCardCon"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Track the progress and status of your submitted
                              claim.
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img7}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography gutterBottom className="navCardheader">
                              Raise a Service Request
                            </Typography>
                            <Typography
                              className="navCardCon"
                              // variant="body6"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Easily request assistance or repairs for your
                              device.
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ background: "none" }}
                      >
                        <Card elevation={3} sx={{ width: "275px" }}>
                          <CardMedia
                            component="img"
                            height="120"
                            image={img8}
                            alt="Order Online"
                          />
                          <CardContent>
                            <Typography gutterBottom className="navCardheader">
                              Extend your Coverage
                            </Typography>
                            <Typography
                              className="navCardCon"
                              // variant="body6"
                              sx={{
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              Extend the protection of your device with our
                              flexible coverage extension options.
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                    </Box>
                  </div>
                </div>
              </SubList>
            </Box>
          </Grid>
        </Grid>
      </SubAppBarContainer>
    </>
  );
}

export default AppBarDesktop;
