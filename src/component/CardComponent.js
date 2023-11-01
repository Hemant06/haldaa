import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CardComponent = ({ img, title, price }) => {
  return (
    <Container>
      <Box>
        <img src={img} alt="" />
        <Typography variant="h5"> {title} </Typography>{" "}
        <Typography variant="body1"> {price} </Typography>{" "}
      </Box>{" "}
    </Container>
  );
};

export default CardComponent;
