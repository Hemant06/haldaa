import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";

const WrapperBox = styled("div")({
  "& p": {
    marginTop: "1rem",
    "&:hover": {
      cursor: "pointer",
      color: "#12B6B6",
    },
  },
});

const Footer = () => {
  return (
    <Box sx={{ padding: "80px 0px 0px 150px", background: "#F4FCFC" }}>
      <Grid container>
        <Grid item lg={3} md={3} sm={6} xs={6}>
          <WrapperBox>
            <Typography variant="h5"> Halda </Typography>{" "}
            <Typography
              variant="body1"
              sx={{
                width: "300px",
                "@media (max-width:600px)": {
                  width: "178px",
                },
              }}
            >
              Aliquam pellentesque pellentese neque vitae elementum.{" "}
            </Typography>{" "}
            <Typography variant="body1"> +9504425494 </Typography>{" "}
            <Typography variant="body1"> infohaldaa @gmail.com </Typography>{" "}
            <Typography
              variant="body1"
              sx={{
                width: "200px",
                "@media screen and (max-width:768px)": {
                  width: "121px",
                },
              }}
            >
              {" "}
              Birkbeck Court, Birkbeck Rd, London W3 6 BQ, UK{" "}
            </Typography>{" "}
          </WrapperBox>{" "}
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={6} xs={6}>
          <WrapperBox>
            <Typography variant="h5"> Other Product </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Ladies Shampoo{" "}
            </Typography>{" "}
            <Typography variant="body1"> Care Drop </Typography>{" "}
            <Typography variant="body1"> Silver Spraym </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Himalaya{" "}
            </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Olay{" "}
            </Typography>{" "}
          </WrapperBox>{" "}
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={6} xs={6}>
          <WrapperBox
            sx={{
              "@media (max-width:600px)": {
                paddingTop: "3rem",
              },
            }}
          >
            <Typography variant="h5"> Quick Links </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Benefits{" "}
            </Typography>{" "}
            <Typography variant="body1"> How To Use </Typography>{" "}
            <Typography variant="body1"> Other Product </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Review{" "}
            </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Contact{" "}
            </Typography>{" "}
          </WrapperBox>{" "}
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={6} xs={6}>
          <WrapperBox
            sx={{
              "@media (max-width:600px)": {
                paddingTop: "3rem",
              },
            }}
          >
            <Typography variant="h5"> We Sell On </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Walmart.Com{" "}
            </Typography>{" "}
            <Typography variant="body1"> Amazon.Com </Typography>{" "}
            <Typography variant="body1"> Ebay.Com </Typography>{" "}
            <Typography variant="body1" width={"300px"}>
              Alibaba.Com{" "}
            </Typography>{" "}
          </WrapperBox>{" "}
        </Grid>{" "}
        <Grid item lg={12} md={12} sm={12}>
          <Box sx={{ textAlign: "center", padding: "4rem" }}>
            <Typography variant="body1">
              {" "}
              © 2023 <span style={{ color: "#12B6B6" }}> Haldaa </span> all
              Right Reserved by{" "}
              <span style={{ color: "#12B6B6" }}> CodexCoder </span>{" "}
            </Typography>{" "}
          </Box>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
};

export default Footer;
