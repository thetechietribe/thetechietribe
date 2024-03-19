"use client";

import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import {
  Box,
  AppBar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  ListItemText,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import MainLogo from "../../../../public/assets/pngs/header/Header_Logo.png";

const drawerWidth = 240;
const navItems = [
  "Services",
  "Clients",
  "Company",
  "Product",
  "Careers",
  "Resources",
];

const nextGenArray = [
  { name: "Data Sciene & AI" },
  { name: "Cybersecurity" },
  { name: "Blockchain" },
];

const advisoryArray = [
  { name: "Digital Transformation" },
  { name: "Product Strategy" },
  { name: "Discovery Workshop" },
  { name: "POC Development" },
  { name: "Boundary Process Outsourcing" },
  { name: "Process Consulting & Audit" },
];

const productEngineeringArray = [
  { name: "Application Re Engineering" },
  { name: "Custom Software Development" },
  { name: "Web Development" },
  { name: "Mobile App Development" },
  { name: "DevOps" },
];

const solutionsArray = [
  { name: "Salesforce" },
  { name: "Service Now" },
  { name: "Mulesoft" },
  { name: "AWS" },
  { name: "Shopify" },
  { name: "Power BI" },
];

const engagementModelArray = [
  { name: "Dedicated Team" },
  { name: "Fixed Price" },
  { name: "OverShore Development Center" },
];

const cloudServicesArray = [
  { name: "Cloud Engineering" },
  { name: "Cloud Migration" },
];

const buttonStyles = {
  navbar: {
    color: "#ffffff",
    fontSize: "16px",
    textTransform: "none",
    fontWeight: "300",
    fontFamily: "Poppins",
    width: "110px",
    height: "40px",
    transition: "color 0.3s ease",
    letterSpacing: "2px",
    "&:hover": {
      color: "#0654b7",
    },
  },

  contactUs: {
    display: { xs: "none", sm: "flex" },
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "16px",
    width: "130px",
    height: "40px",
    ml: "2rem",
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

const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#0000000" }}>
        MUI
      </Typography>
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
            <Button sx={buttonStyles.contactUs}>Contact Us</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          backgroundColor: open ? "#ffffff" : "transparent",
          padding: "5px 57px",
          padding: { xs: "5px 10px", lg: "5px 57px" },

          boxShadow: "none",
          transition: "background-color 1s ease",
          "& .nav-btn": {
            color: open ? "#000000" : "#ffffff",
          },
          "&:hover": {
            backgroundColor: "#ffffff",
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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Image src={MainLogo} width={200} />

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: "20px",
              justifyContent: "flex-end",
            }}
          >
            <Button
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handleServicesButtonClick}
              sx={buttonStyles.navbar}
              className="nav-btn"
              endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
              Services
            </Button>
            <Popover
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
            </Popover>
            <Button sx={buttonStyles.navbar} className="nav-btn">
              Clients
            </Button>{" "}
            <Button sx={buttonStyles.navbar} className="nav-btn">
              Company
            </Button>{" "}
            <Button sx={buttonStyles.navbar} className="nav-btn">
              Product
            </Button>{" "}
            <Button sx={buttonStyles.navbar} className="nav-btn">
              Career
            </Button>
            <Button sx={buttonStyles.navbar} className="nav-btn">
              Resources
            </Button>
            <Button sx={buttonStyles.contactUs}>Contact Us</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
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
