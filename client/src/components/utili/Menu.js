import React, { useContext, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AppBarMobile from '../styles/appbar/AppBarMobile';
import AppBarDesktop from '../styles/appbar/AppBarDesktop';



function MenuBar(props) {
  
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  
  
    return (
      <>
        {/* {matches ? <AppBarMobile matches={matches} /> : <AppBarDesktop matches={matches} sx={{ position: "fixed" }} />} */}
        <AppBarDesktop matches={matches} sx={{ position: "fixed" }} />
      </>
    )
  }
  
  
  export default MenuBar;