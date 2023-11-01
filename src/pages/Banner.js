import styled from "@emotion/styled";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import React from "react";

const Wrapper = styled("div")({
  background: "#E0F4F4",
  height: "100vh",
  paddingTop: "150px",
  ".nav-links": {
    "& Button": {
      "&:hover": {
        backgroundColor: "#1E3D58", // Example hover background color
        color: "#E0E0E0",
      },
    },
  },
});

const SecondSection = styled("div")({
    
})

function Banner() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <Typography variant="h3" sx={{ marginBottom: "0.5rem" }}>
                  Natural & Organic
                </Typography>
                <Typography variant="h2" sx={{ marginBottom: "0.5rem" }}>
                  Skin{" "}
                  <span style={{ fontWeight: "700" }}>Care Product For</span>{" "}
                  Health
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "30px" }}>
                  Conveniently customize proactive web services for leveraged
                  without continualliery aggregate fricctionle ou wellies
                  richard.and very customize continually.
                </Typography>
                <Box className="nav-links">
                  <Button variant="contained">Shop Now</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <SecondSection>
                <img
                  src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/banner/01.png"
                  alt=""
                  srcset=""
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                  }}
                />
              </SecondSection>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Banner;
