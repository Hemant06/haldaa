import { Container, Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import CardComponent from "../component/CardComponent";
import styled from "@emotion/styled";
// import AiFillStar from "react-icons/ai";

const StyleProduct = styled("div")({
  padding: "30px 15px;",
  boxShadow: "0px 0px 24px rgba(178, 180, 187, 0.42)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  height: "100%",
});

const Product = () => {
  return (
    <Box sx={{ padding: "80px", backgroundColor: "#F4FCFC" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">
          Our Haldaa{" "}
          <span style={{ fontWeight: "700" }}> Skincare Product </span>{" "}
        </Typography>{" "}
        <Typography
          variant="body1"
          sx={{ maxWidth: "600px", margin: "0 auto", paddingTop: "1rem" }}
        >
          Conveniently customize proactive services leveraged without
          continualliery aggregate fricctionle ou wellies{" "}
        </Typography>{" "}
      </Box>{" "}
      <Grid container spacing={3} paddingTop={"3rem"} textAlign={"center"}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <StyleProduct>
            <CardComponent
              img="https://haldaa-website.netlify.app/images/product-img1.png"
              title="Ladies Shampoo"
              price="$257.35"
            />
            <Button variant="contained"> Add to Cart </Button>{" "}
          </StyleProduct>{" "}
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <StyleProduct>
            <CardComponent
              img="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/product/02.png"
              title="Himalaya Body Lotion"
              price="$257.35"
            />
            <Button variant="contained"> Add to Cart </Button>{" "}
          </StyleProduct>{" "}
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <StyleProduct>
            <CardComponent
              img="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/product/03.png"
              title="Olay Blody Lotion"
              price="$257.35"
            />
            <Button variant="contained"> Add to Cart </Button>{" "}
          </StyleProduct>{" "}
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <StyleProduct>
            <CardComponent
              img="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/product/04.png"
              title="Boro Plus Lotion"
              price="$257.35"
            />
            <Button variant="contained"> Add to Cart </Button>{" "}
          </StyleProduct>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
};

export default Product;
