"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import {
  Box,
  AppBar,
  // Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  ListItemText,
  // Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import MainLogo from "../../../../public/assets/pngs/header/Header_Logo.png";
import WhiteLogo from "../../../../public/assets/pngs/header/WhiteLogo.png";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Services",
  "About Company",
  // "Clients",
  // "Product",
  "Careers",
  // "Resources",
];

// const nextGenArray = [
//   { name: "Data Sciene & AI" },
//   { name: "Cybersecurity" },
//   { name: "Blockchain" },
// ];

// const advisoryArray = [
//   { name: "Digital Transformation" },
//   { name: "Product Strategy" },
//   { name: "Discovery Workshop" },
//   { name: "POC Development" },
//   { name: "Boundary Process Outsourcing" },
//   { name: "Process Consulting & Audit" },
// ];

// const productEngineeringArray = [
//   { name: "Application Re Engineering" },
//   { name: "Custom Software Development" },
//   { name: "Web Development" },
//   { name: "Mobile App Development" },
//   { name: "DevOps" },
// ];

// const solutionsArray = [
//   { name: "Salesforce" },
//   { name: "Service Now" },
//   { name: "Mulesoft" },
//   { name: "AWS" },
//   { name: "Shopify" },
//   { name: "Power BI" },
// ];

// const engagementModelArray = [
//   { name: "Dedicated Team" },
//   { name: "Fixed Price" },
//   { name: "OverShore Development Center" },
// ];

// const cloudServicesArray = [
//   { name: "Cloud Engineering" },
//   { name: "Cloud Migration" },
// ];

const buttonStyles = {
  navbar: {
    color: "#ffffff",
    fontSize: "16px",
    textTransform: "none",
    fontWeight: "300",
    fontFamily: "Poppins",
    // width: "110px",
    height: "40px",
    transition: "color 0.3s ease",
    letterSpacing: "2px",
    "&:hover": {
      color: "#0654b7",
    },
  },

  contactUs: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "16px",
    width: { xs: "200px", lg: "130px" },
    height: "40px",
    ml: { xs: "0rem", lg: "2rem" },
    transition: "0.5 ease",
    borderRadius: "8px",
    transition: "0.5s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    transition: "background-color 0.3s ease",
    "&&:hover": {
      backgroundColor: "#000000",
    },
  },

  menuContainer: {
    display: "flex",
    flexDirection: "column",
    width: "22%",
    backgroundColor: "#EDEFF8",
    padding: "30px 40px",
  },

  menuContainer_1: {
    display: "flex",
    flexDirection: "column",
    width: "18.5%",
    padding: "30px 40px",
  },

  menuHeading: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: "Poppins",
  },

  menuList: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "Poppins",
    mt: "1rem",
    cursor: "pointer",
  },

  positionsText: {
    backgroundColor: "#ECECEC",
    borderRadius: "24px",
    fontSize: "16px",
    color: "#000000",
    padding: "8px 16px",
    fontWeight: "400",
  },

  logo: {
    width: "200px",
    height: "200px",
  },

  newTag: {
    backgroundColor: "#FBD4C5",
    borderRadius: "6px",
    fontSize: "12px",
    color: "red",
    padding: "3px 8px",
  },

  servicesByRole: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px",
    gap: "20px",
  },
};

const DrawerAppBar = ({
  scrollToServices,
  scrollToAbout,
  scrollToBottom,
  scrollToHome,
  activeSection,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const isActive = (sectionName) => {
    return activeSection === sectionName ? true : false;
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleServicesButtonClick = (event) => {
    if (open) {
      handlePopoverClose();
    } else {
      handlePopoverOpen(event);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrolled]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ padding: "10px" }}>
        <Image src={MainLogo} width={200} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                color: "#000000",
                textTransform: "none",
                textAlign: "center",
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button sx={buttonStyles.contactUs}>Contact Us</Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          backgroundColor: open || scrolled ? "#ffffff" : "transparent",
          padding: "5px 57px",
          padding: { xs: "5px 10px", lg: "5px 57px" },

          boxShadow: "none",
          transition: "background-color 1s ease",
          "&:hover": {
            backgroundColor: "#ffffff",
            "& .menu-btn": {
              color: "#000000",
            },
            "& .nav-btn": {
              color: "#000000",
            },
            "& .TechieTribe": {
              color: "#0654b7",
            },
          },
        }}
        component="nav"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon
              className="menu-btn"
              sx={{ color: scrolled || open ? "#000000" : "#ffffff" }}
            />
          </IconButton>

          <Image src={scrolled || open ? MainLogo : WhiteLogo} width={200} />

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: "20px",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                color: isActive("home")
                  ? "#378C92"
                  : scrolled
                  ? "#000000"
                  : "#ffffff",
                fontWeight: isActive("home") ? "600" : "300",
                fontSize: "16px",
                textTransform: "none",
                fontFamily: "Poppins",
                height: "40px",
                transition: "color 0.3s ease",
                letterSpacing: "2px",
                "&:hover": {
                  color: "#0654b7",
                },
              }}
              className="nav-btn"
              onClick={scrollToHome}
            >
              Home
            </Button>
            <Button
              onClick={scrollToServices}
              // aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              // onMouseEnter={handleServicesButtonClick}
              className="nav-btn"
              sx={{
                color: isActive("services")
                  ? "#378C92"
                  : scrolled
                  ? "#000000"
                  : "#ffffff",
                fontWeight: isActive("services") ? "600" : "300",
                fontSize: "16px",
                textTransform: "none",
                fontFamily: "Poppins",
                height: "40px",
                transition: "color 0.3s ease",
                letterSpacing: "2px",
                "&:hover": {
                  color: "#0654b7",
                },
              }}
              // endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
              Services
            </Button>
            <Button
              onClick={scrollToAbout}
              sx={{
                color: isActive("about")
                  ? "#378C92"
                  : scrolled
                  ? "#000000"
                  : "#ffffff",
                fontWeight: isActive("about") ? "600" : "300",
                fontSize: "16px",
                textTransform: "none",
                fontFamily: "Poppins",
                height: "40px",
                transition: "color 0.3s ease",
                letterSpacing: "2px",
                "&:hover": {
                  color: "#0654b7",
                },
              }}
              className="nav-btn"
            >
              About Company
            </Button>{" "}
            {/* <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              PaperProps={{
                sx: {
                  width: "100%",
                  maxWidth: "100%",
                  mt: "1.07rem",
                  ml: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "0px 0px 20px 20px ",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <Box sx={buttonStyles.menuContainer}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Typography sx={buttonStyles.menuHeading}>
                      Next-Gen Services{" "}
                    </Typography>
                    <Typography sx={buttonStyles.newTag}>NEW</Typography>
                  </Box>

                  {nextGenArray?.map((data, index) => {
                    return (
                      <Typography key={index} sx={buttonStyles.menuList}>
                        {data.name}
                      </Typography>
                    );
                  })}
                </Box>
                <Box sx={buttonStyles.menuContainer_1}>
                  <Typography sx={buttonStyles.menuHeading}>
                    Advisory
                  </Typography>
                  {advisoryArray?.map((data, index) => {
                    return (
                      <Typography key={index} sx={buttonStyles.menuList}>
                        {data.name}
                      </Typography>
                    );
                  })}

                  <Typography
                    style={{ marginTop: "2rem" }}
                    sx={buttonStyles.menuHeading}
                  >
                    Optimization
                  </Typography>
                  <Typography sx={buttonStyles.menuList}>
                    Quality Assurance
                  </Typography>
                </Box>
                <Box sx={buttonStyles.menuContainer_1}>
                  <Typography sx={buttonStyles.menuHeading}>
                    Product Engineering
                  </Typography>
                  {productEngineeringArray?.map((data, index) => {
                    return (
                      <Typography key={index} sx={buttonStyles.menuList}>
                        {data.name}
                      </Typography>
                    );
                  })}

                  <Typography
                    style={{ marginTop: "4rem" }}
                    sx={buttonStyles.menuHeading}
                  >
                    Cloud Services
                  </Typography>
                  {cloudServicesArray?.map((data, index) => {
                    return (
                      <Typography key={index} sx={buttonStyles.menuList}>
                        {data.name}
                      </Typography>
                    );
                  })}
                </Box>
                <Box sx={buttonStyles.menuContainer_1}>
                  <Typography sx={buttonStyles.menuHeading}>
                    Solutions
                  </Typography>
                  {solutionsArray?.map((data, index) => {
                    return (
                      <Typography key={index} sx={buttonStyles.menuList}>
                        {data.name}
                      </Typography>
                    );
                  })}
                </Box>
                <Box sx={buttonStyles.menuContainer_1}>
                  <Typography sx={buttonStyles.menuHeading}>
                    Engagemnent Model
                  </Typography>
                  {engagementModelArray?.map((data, index) => {
                    return (
                      <Typography key={index} sx={buttonStyles.menuList}>
                        {data.name}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
              <Divider />
              <Box sx={buttonStyles.servicesByRole}>
                <Typography
                  style={{ display: "flex", alignItems: "center" }}
                  sx={buttonStyles.menuHeading}
                >
                  Services By Role
                  <ArrowRightIcon />
                </Typography>
                <Typography sx={buttonStyles.positionsText}>CEO</Typography>
                <Typography sx={buttonStyles.positionsText}>CTO</Typography>
                <Typography sx={buttonStyles.positionsText}>CIO</Typography>
                <Typography sx={buttonStyles.positionsText}>
                  Product Leader
                </Typography>
              </Box>
            </Popover> */}
            {/* <Button sx={buttonStyles.navbar} className="nav-btn">
              Clients
            </Button>{" "} */}
            {/* <Button sx={buttonStyles.navbar} className="nav-btn">
              Product
            </Button>{" "} */}
            {/* <Button sx={buttonStyles.navbar} className="nav-btn">
              Career
            </Button> */}
            {/* <Button sx={buttonStyles.navbar} className="nav-btn">
              Resources
            </Button> */}
            <Button onClick={scrollToBottom} sx={buttonStyles.contactUs}>
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
