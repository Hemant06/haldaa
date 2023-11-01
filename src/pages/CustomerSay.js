import styled from "@emotion/styled";
import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../images/Screenshot 2023-11-01 112609.png";
import Image2 from "../images/Screenshot 2023-11-01 112524.png";

const Wrapper = styled("div")({
  backgroundImage:
    "url(https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/bg/01.jpg)",
  height: "100vh",
});

const CustomerSay = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line for autoplay
  };
  const centerSliderStyles = {
    margin: "0 auto", // Set left and right margins to "auto"
    width: "50%", // Adjust the width as needed
  };
  return (
    <Wrapper sx={{ paddingTop: "5rem" }}>
      <Grid container>
        <Grid item lg={12} md={12} sm={12}>
          <Box sx={{ textAlign: "center", paddingTop: "5rem" }}>
            <Typography variant="h3">
              Our Customer Said{" "}
              <span style={{ fontWeight: "bold" }}> About Skincare </span>{" "}
            </Typography>{" "}
            <Typography
              variant="body1"
              sx={{ maxWidth: "600px", display: "block", margin: "0 auto" }}
            >
              {" "}
              Conveniently customize proactive services leveraged without
              continualliery aggregate fricctionle ou wellies{" "}
            </Typography>{" "}
          </Box>{" "}
          <Slider {...settings} style={centerSliderStyles}>
            <Box sx={{ display: "flex" }}>
              <img src={Image1} alt="" width={"520px"} />{" "}
            </Box>{" "}
            <Box>
              <img src={Image2} alt="" width={"520px"} />{" "}
            </Box>{" "}
          </Slider>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Wrapper>
  );
};
export default CustomerSay;
