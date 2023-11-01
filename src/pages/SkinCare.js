import { Container } from "@mui/material";
import React from "react";
import { Box, styled, Grid, Typography } from "@mui/material";
// import Product from "./Product";

const WrapperClass = styled("div")({
  padding: "100px 0px",
  backgroundImage:
    'url("https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/bg/02.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  ".Icon-box": {
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#12B6B6",
  },

  ".Content": {
    marginLeft: "20px",
    width: "50%",
  },

  ".Parent-box": {
    padding: "30px 0px",
  },
});
const SkincareUse = () => {
  return (
    <Box>
      <WrapperClass>
        <Grid container sx={{}}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {" "}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <Typography variant="h3">
                How To Use Our{" "}
                <b style={{ fontWeight: 600 }}> Skincare Product </b>{" "}
              </Typography>{" "}
              <Typography variant="body2" style={{ marginBottom: "15px" }}>
                Conveniently customize proactive services leveraged without
                continualliery aggregate fricctionle ou wellies{" "}
              </Typography>{" "}
            </Box>
            <Box className="Parent-box" sx={{ display: "flex" }}>
              <Box className="Icon-box" sx={{ padding: "0px 27px" }}>
                <img
                  src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/htu/icon/02.png"
                  alt="icon-1"
                ></img>{" "}
              </Box>{" "}
              <Box className="Content">
                <Typography variant="h5"> Environmental Impact </Typography>{" "}
                <Typography variant="body2">
                  Conveniently and proacveu nique and ideasy use producton.{" "}
                </Typography>{" "}
              </Box>{" "}
            </Box>
            <Box className="Parent-box" sx={{ display: "flex" }}>
              <Box className="Icon-box" sx={{ padding: "0px 21px" }}>
                <img
                  src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/htu/icon/01.png"
                  alt="icon-2"
                ></img>{" "}
              </Box>{" "}
              <Box className="Content">
                <Typography variant="h5"> No Internal Side Effects </Typography>{" "}
                <Typography variant="body2">
                  Conveniently and proacveu nique and ideasy use producton.{" "}
                </Typography>{" "}
              </Box>{" "}
            </Box>
            <Box className="Parent-box" sx={{ display: "flex" }}>
              <Box className="Icon-box" sx={{ padding: "0px 21px" }}>
                <img
                  src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/htu/icon/03.png"
                  alt="icon-2"
                ></img>{" "}
              </Box>{" "}
              <Box className="Content">
                <Typography variant="h5"> Wait 10 Mins And Wash </Typography>{" "}
                <Typography variant="body2">
                  Conveniently and proacveu nique and ideasy use producton.{" "}
                </Typography>{" "}
              </Box>{" "}
            </Box>{" "}
          </Grid>{" "}
        </Grid>
      </WrapperClass>{" "}
      {/* <Product /> */}{" "}
    </Box>
  );
};

export default SkincareUse;
