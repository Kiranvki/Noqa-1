import React from "react";
import Banner from "./Banner";
import { Separator, SeparatorBla } from "../styles/theme";
import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";

import ProductsList from "./Products/ProductsList";
import Promotions from "./Promotions";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <Stack>
      <Banner />
      <ProductsList />
      <Promotions />
      <Testimonials />
    </Stack>
  );
}
