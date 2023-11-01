import React from "react";
import Topbar from "./Topbar";
import { Box } from "@mui/material";
import Banner from "../pages/Banner";
import Features from "../pages/Features";
import GlowingSkin from "../pages/GlowingSkin";
import Benefits from "../pages/Benefits";
import SkinCare from "../pages/SkinCare";
import Product from "../pages/Product";
import CustomerSay from "../pages/CustomerSay";
import BuyNow from "../pages/BuyNow";
import Subscribe from "../pages/Subscribe";
import Footer from "./Footer";

function Homelayout() {
  return (
    <Box>
      <Topbar />
      <Banner />
      <Features />
      <GlowingSkin />
      <Benefits />
      <SkinCare />
      <Product />
      <CustomerSay />
      <BuyNow />
      <Subscribe />
      <Footer />
    </Box>
  );
}
export default Homelayout;
