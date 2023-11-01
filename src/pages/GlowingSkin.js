import styled from "@emotion/styled";
import { Box, Button, Grid, Container, Typography } from "@mui/material";
import React from "react";

const Wrapper = styled("div")({
  backgroundImage:
    "url(https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/bg/01.jpg)",
  backgroundSize: "cover !important",
  backgroundRepeat: "no-repeat !important",

  ".nav-links": {
    paddingTop: "2rem",
    "& Button": {
      "&:hover": {
        backgroundColor: "#1E3D58", // Example hover background color
        color: "#E0E0E0",
      },
    },
  },
});
const Box1 = styled("div")({
  paddingTop: "5rem",
  "@media screen and (max-width:600px)": {
    "& h3": {
      width: "376px!important",
    },
    "& p": {
      width: "360px!important",
    },
  },
});
const GlowingSkin = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box1>
                <Typography variant="h3" sx={{ width: "472px" }}>
                  Glowing Skin Is A{" "}
                  <span style={{ fontWeight: "700" }}> Result Of Proper </span>
                  Skin Care{" "}
                </Typography>{" "}
              </Box1>{" "}
              <Box1>
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: "16px",
                    width: "495px",
                  }}
                >
                  Continually productize compelling quality for packed with
                  elated productize compelling quality for packed in with all
                  elated Them Setting up to website and creating pages.{" "}
                </Typography>{" "}
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: "16px",
                    width: "495px",
                  }}
                >
                  Continually productize compelling quality for packed with
                  elated productize compelling quality for packed in with all
                  elated Them aroductize compelling quality for packed in with
                  all elated Them Setting up to website and creating pages.{" "}
                </Typography>{" "}
              </Box1>{" "}
              <Box className="nav-links">
                <Button variant="contained"> Shop Now </Button>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ padding: "5rem 0px 0px 15rem" }}>
                <img
                  src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/about/01.png"
                  alt=""
                  srcset=""
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                  }}
                />{" "}
              </Box>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Box>{" "}
      </Container>{" "}
    </Wrapper>
  );
};

export default GlowingSkin;
