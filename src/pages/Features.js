import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const WrapperBox = styled("div")({
  boxShadow: "0px 0px 24px rgba(179, 181, 191, 0.42)",

  borderRadius: "10px",

  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "5px 5px 30px 5px",
  "& img": {
    display: "block",
    margin: "0 auto",
    height: "auto",
    maxWidth: "100%",
    padding: "2rem",
    transition: "transform 0.3s ease-in-out",
  },
  "@keyframes rotateLeftRight": {
    " 0%": { transform: "rotate(0deg) " },
    "50%": { transform: "rotate(-180deg)" }, // Rotate fully to the left
    "100%": { transform: "rotate(180deg)" }, // Rotate fully to the right
  },
  "& img:hover": {
    animation: "rotateLeftRight 2s forwards", // Adjust the duration (2s here) as needed
  },
});

const BoxContainer = styled("div")({
  padding: "120px",
  backgroundColor: "#F4FCFC",
});
const Features = () => {
  return (
    <BoxContainer>
      <WrapperBox>
        <Box>
          <img
            src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/feature/01.png"
            alt=""
            srcset=""
          />
          <Typography variant="h5">100% Organic</Typography>
        </Box>
        <Box>
          <img
            src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/feature/02.png"
            alt=""
            srcset=""
          />
          <Typography variant="h5">No Fragrances</Typography>
        </Box>
        <Box>
          <img
            src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/feature/03.png"
            alt=""
            srcset=""
          />
          <Typography variant="h5">Paraben Free</Typography>
        </Box>
        <Box>
          <img
            src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/feature/04.png"
            alt=""
            srcset=""
          />
          <Typography variant="h5">Hypo Allergenic</Typography>
        </Box>
      </WrapperBox>
    </BoxContainer>
  );
};

export default Features;
