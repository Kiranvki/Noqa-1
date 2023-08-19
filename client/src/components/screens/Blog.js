import React from "react";
import { Blogcarousel } from "../utili/carousal/Imgcarousel";
import { Grid, Stack, Typography, Box, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Separator, CommonHeader, theme } from "../styles/theme";

export default function Blog() {
  return (
    <>
      <Container maxWidth="xl">
        <Separator />
        {/* claim process  */}
        <Grid container sx={{ paddingX: "30px" }}>
          <Grid item md={12} sm={12} xm={12} lg={12}>
            <Box component="div" className="port-content">
              <CommonHeader className="CommonHeader">Blogs</CommonHeader>
            </Box>
          </Grid>
        </Grid>
        {/* blog carousal */}

        <Blogcarousel />
      </Container>
    
      
    </>
  );
}
