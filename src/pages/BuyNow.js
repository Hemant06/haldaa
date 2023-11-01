import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Box1 = styled("div")({
  paddingTop: "6rem",
  "@media screen and (max-width:768px)": {
    "& h2": {
      fontSize: "35px!important",
      width: "345px!important",
    },
  },
});

const BuyNow = () => {
  return (
    <Box>
      <Grid container>
        <Grid item lg={6} md={12} sm={12}>
          <Box>
            <img
              src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/bg/01.png"
              alt=""
              width={"90%"}
            />{" "}
          </Box>{" "}
        </Grid>{" "}
        <Grid item lg={6} md={12} sm={12}>
          <Box1>
            <Typography variant="h2" width={"600px"}>
              Buy Now And Get{" "}
              <span style={{ fontWeight: "bold" }}> 40 % Off </span> On Your
              First Purchase!{" "}
            </Typography>{" "}
            <Box sx={"maxWidth:80%"} paddingTop={"1rem"}>
              <Typography variant="body1">
                Conveniently customize proactive services leveraged without
                continualliery aggregate fricctionle ou wellies{" "}
              </Typography>{" "}
              <Box paddingTop={"1rem"}>
                {" "}
                <Button variant="contained"> Shop Now </Button>{" "}
              </Box>{" "}
            </Box>{" "}
          </Box1>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
};

export default BuyNow;
