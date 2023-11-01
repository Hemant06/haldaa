import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled("div")({
  backgroundImage:
    "url(https://haldaa-website.netlify.app/images/newslatter-back-img.jpg)",
  padding: "100px 0px",
  backgroundSize: "cover",
});

const Subscribe = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h3"> Subscribe Our Newsletter </Typography>{" "}
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={8}>
                  <TextField
                    sx={{
                      padding: "17px 30px",
                      background: "white",
                      borderRadius: "50px",
                      "&:focus": {
                        outline: "none",
                      },
                    }}
                    fullWidth
                    placeholder="Enter your email"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" sx={{ width: "190px" }}>
                    {" "}
                    Subscribe Now{" "}
                  </Button>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Box>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </Wrapper>
  );
};

export default Subscribe;
