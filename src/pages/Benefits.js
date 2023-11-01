import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
// import SkincareUse from "./SkincareUse";

const WrapperClass = styled("div")({
  padding: "120px 0px",
  background: "#F4FCFC",
  ".Icon-box": {
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#12B6B6",
  },

  ".Content": {
    marginLeft: "20px",
  },

  ".Parent-box": {
    padding: "53px 0px",
  },
  h5: {
    fontWeight: "600",
  },
});
const Box1 = styled("div")({
  textAlign: "center",
  marginBottom: "40px",
  "@media screen and (max-width:600px)": {
    "& p": {
      padding: "0px !important",
    },
  },
});
const Benefitpage = () => {
  return (
    <Box>
      <WrapperClass>
        <Container>
          <Box1>
            <Typography variant="h3">
              Best Benefits Of <b> Haldaa Skincare </b>{" "}
            </Typography>{" "}
            <Typography variant="body1" sx={{ padding: "0rem 17rem" }}>
              Conveniently customize proactive services leveraged without
              continualliery aggregate fricctionle ou wellies{" "}
            </Typography>{" "}
          </Box1>{" "}
          <Grid container sx={{}}>
            <Grid item xs={12} sm={3} md={4} lg={4}>
              <Box className="Parent-box" sx={{ display: "flex" }}>
                <Box className="Icon-box" sx={{ padding: "15px" }}>
                  <img
                    src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/care/icon/01.png"
                    alt="icon-1"
                  ></img>{" "}
                </Box>{" "}
                <Box className="Content">
                  <Typography variant="h5"> Environmental Impact </Typography>{" "}
                  <Typography variant="body2">
                    Conveniently and proacveu nique and ideasy use producton.{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
              <Box className="Parent-box" sx={{ display: "flex" }}>
                <Box className="Icon-box" sx={{ padding: "0px 21px" }}>
                  <img
                    src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/care/icon/02.png"
                    alt="icon-2"
                  ></img>{" "}
                </Box>{" "}
                <Box className="Content">
                  <Typography variant="h5">
                    {" "}
                    No Internal Side Effects{" "}
                  </Typography>{" "}
                  <Typography variant="body2">
                    Conveniently and proacveu nique and ideasy use producton.{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
              <Box className="Parent-box" sx={{ display: "flex" }}>
                <Box className="Icon-box" sx={{ padding: "0px 21px" }}>
                  <img
                    src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/care/icon/03.png"
                    alt="icon-3"
                  ></img>{" "}
                </Box>{" "}
                <Box className="Content">
                  <Typography variant="h5">
                    {" "}
                    Lack Of Artificial Smell{" "}
                  </Typography>{" "}
                  <Typography variant="body2">
                    Conveniently and proacveu nique and ideasy use producton.{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/care/01.png"
                alt="nature"
              ></img>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box className="Parent-box" sx={{ display: "flex" }}>
                <Box className="Icon-box" sx={{ padding: "0px 21px" }}>
                  <img
                    src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/care/icon/04.png"
                    alt="icon-4"
                  ></img>{" "}
                </Box>{" "}
                <Box className="Content">
                  <Typography variant="h5"> No Skin Irritation </Typography>{" "}
                  <Typography variant="body2">
                    Conveniently and proacveu nique and ideasy use producton.{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
              <Box className="Parent-box" sx={{ display: "flex" }}>
                <Box className="Icon-box" sx={{ padding: "0px 21px" }}>
                  <img
                    src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/care/icon/05.png"
                    alt="icon-5"
                  ></img>{" "}
                </Box>{" "}
                <Box className="Content">
                  <Typography variant="h5"> Exceeding Standards </Typography>{" "}
                  <Typography variant="body2">
                    Conveniently and proacveu nique and ideasy use producton.{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
              <Box className="Parent-box" sx={{ display: "flex" }}>
                <Box className="Icon-box" sx={{ padding: "0px 21px" }}>
                  <img
                    src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/care/icon/06.png"
                    alt="icon-6"
                  ></img>{" "}
                </Box>{" "}
                <Box className="Content">
                  <Typography variant="h5"> Real Results </Typography>{" "}
                  <Typography variant="body2">
                    Conveniently and proacveu nique and ideasy use producton.{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Container>{" "}
      </WrapperClass>{" "}
      {/* <SkincareUse /> */}{" "}
    </Box>
  );
};

export default Benefitpage;
