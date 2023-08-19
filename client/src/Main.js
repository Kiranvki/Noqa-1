import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import ProtectedRoutes from "../src/components/middleware/ProtectedRoute";
import { ThemeProvider } from "@mui/material/styles";
import ScrollToTop from "./components/utili/ScrollToTop";
import Pnf from "./components/utili/Pnf";
import MenuBar from "./components/utili/Menu";
import {theme} from '../src/components/styles/theme'

function Main(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "NoQa";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MenuBar />
          <ScrollToTop>
            <Routes>
              <Route path={"/"} element={<Home />} />

              <Route path={"/*"} element={<Pnf />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Main;
