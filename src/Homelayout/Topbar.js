// import styled from "@emotion/styled";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Wrapper = styled("div")({
  background: "#E0F4F4",
  height: "100px",
  ".logo": {
    "& a": {
      fontSize: "1.5rem",
      color: "#0B2239",
      textDecoration: "none",
      fontWeight: "600",
      fontFamily: "Poppins ,sans-serif",
      paddingLeft: "1rem",
    },
    "& img": {
      "@media screen and (max-width:768px)": {
        display: "none",
        padding: "0px",
      },
    },
  },
  ".nav-links": {
    "& a": {
      padding: "15px 20px",
      color: "#0B2239",
      textDecoration: "none",
      fontWeight: "500",
      fontFamily: "Poppins ,sans-serif",
      "&:hover": {
        color: "#12B6B6",
      },
    },
    "& Button": {
      "&:hover": {
        backgroundColor: "#1E3D58", // Example hover background color
        color: "#E0E0E0", // Example hover text color
      },
    },
  },
});

const Topbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerToggle() {
    setDrawerOpen((prevOpen) => !prevOpen);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Update state based on scroll position
      setIsScrolled(window.scrollY > 10);
    };

    // 2. Add scroll event listener
    window.addEventListener("scroll", checkScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <Wrapper>
      <AppBar
        sx={{
          background: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              lg: "space-around",
            },
            height: "80px",
          }}
        >
          <Box className="logo">
            <img
              src="https://demos.codexcoder.com/themeforest/html/haldaa-demo/haldaa/assets/images/banner/shape/01.png"
              alt=""
              style={{
                position: "absolute",
                top: "6px",
                left: "30px",
                width: "90px",
              }}
            />{" "}
            <NavLink to="/"> Haldaa </NavLink>{" "}
          </Box>{" "}
          <Box
            className="nav-links"
            sx={{
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}
          >
            <NavLink to="/"> Home </NavLink>{" "}
            <NavLink to="/"> Benefits </NavLink>{" "}
            <NavLink to="/"> Home To Use </NavLink>{" "}
            <NavLink to="/"> Other product </NavLink>{" "}
            <NavLink to="/"> Review </NavLink>{" "}
            <Button variant="contained" sx={{ marginLeft: "30px" }}>
              Shop Now{" "}
            </Button>{" "}
          </Box>{" "}
          <IconButton
            sx={{
              display: { lg: "none", md: "block", sm: "block", xs: "block" },
            }}
            onClick={handleDrawerToggle}
          >
            <FaBars />
          </IconButton>{" "}
          <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
            <List>
              <ListItem
                button
                component={NavLink}
                to="/"
                activeClassName="active"
              >
                Home{" "}
              </ListItem>{" "}
              <ListItem button component={NavLink} to="/Benefits">
                Benefits{" "}
              </ListItem>{" "}
              <ListItem button component={NavLink} to="/hometouse">
                Home To Use{" "}
              </ListItem>{" "}
              <ListItem button component={NavLink} to="/otherproduct">
                Other product{" "}
              </ListItem>{" "}
              <ListItem button component={NavLink} to="/review">
                Review{" "}
              </ListItem>{" "}
              <ListItem>
                <Button
                  component={NavLink} // Using NavLink as the component for the Button for routing capability
                  to="/shopnow"
                  sx={{
                    // Add your styles here
                    background: " #12B6B6",
                    color: "#ffff",
                    padding: "11px 27px",
                    fontSize: "16px",
                    fontFamily: "Poppins ,sans-serif",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#0B2239",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Shop Now{" "}
                </Button>{" "}
              </ListItem>{" "}
              {/* ... add other navigation links as needed ... */}{" "}
            </List>{" "}
          </Drawer>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
    </Wrapper>
  );
};

export default Topbar;
