"use client";

import React from "react";
import Image from "next/image";

import { Box, Button, Link, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import fieldImage from "../../../../public/assets/pngs/footer/footer-shape.png";
import whiteLogo from "../../../../public/assets/pngs/header/WhiteLogo.png";

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: { xs: "40px 15px", lg: "80px 0px 60px 0px" },
    margin: "auto",
    width: { xs: "100%", md: "63rem", lg: "80rem" },
  },

  newsLetterHeading: {
    fontFamily: "Poppins",
    fontSize: { xs: "30px", md: "48px" },
    fontWeight: "600",
    textAlign: "center",
  },

  newsLetterTagline: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    mt: "0.5rem",
    textAlign: "center",
  },

  fieldContainer: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },

  textField: {
    border: "1px solid #378C92",
    width: { xs: "300px", md: "500px" },
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    "& label.Mui-focused": {
      color: "#378C92",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },
    },
  },

  subscribeBtn: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    width: { xs: "100%", md: "140px" },
    fontSize: "17px",
    height: { xs: "60px", md: "55px" },
    borderRadius: "12px",
    padding: { xs: "0px 10px", md: "0px 30px" },
    transition: "background-color 0.3s ease",
    "&&:hover": {
      backgroundColor: "#ffffff",
      color: "#378C92",
      border: "1px solid #378C92",
    },
  },

  image: {
    display: { xs: "none", md: "flex" },
  },

  image2: {
    display: { xs: "none", md: "flex" },
    transform: "rotate(90deg)",
  },

  footerInfoContainer: {
    width: "100%",
    mt: "5rem",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
  },

  logoContainer: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "34%" },
  },

  quickLinksContainer: {
    mt: { xs: "1rem", md: "0rem" },
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "22%" },
  },

  logoSubTagline: {
    mt: "1.5rem",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    color: "#646464",
    width: { xs: "100%", md: "70%" },
  },

  email: {
    mt: "1rem",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    color: "#378C92",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  socialMediaIcons: {
    mt: "2rem",
    display: "flex",
    gap: "2rem",
  },

  icon: {
    fontSize: "30px",
    cursor: "pointer",
    "&&:hover": {
      color: "#378C92",
    },
  },

  quickLinksHeading: {
    mt: "0.5rem",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    color: "#ffffff",
    mb: "1rem",
  },

  quickLinks: {
    mt: "1rem",
    color: "#646464",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    "&&:hover": {
      color: "#378C92",
    },
  },

  hours: {
    mt: "1rem",
    color: "#646464",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
  },

  copyrightContainer: {
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    backgroundColor: "#378C92",
    padding: { xs: "4px 10px", lg: "4px 0px" },
    margin: "auto",
    width: { xs: "100%", md: "63rem", lg: "80rem" },
  },

  topHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    flexDirection: { xs: "column", md: "row" },
  },

  copyright: {
    color: "#ffffff",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "center",
  },

  topHeaderLinksContainer: {
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    gap: "1rem",
  },

  topHeaderLinks: {
    color: "#ffffff",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "400",
    cursor: "pointer",
    "&&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#ffffff",
      textUnderlineOffset: "4px",
    },
  },
};

const quickLinksArray = [
  { name: "Services" },
  { name: "About Company" },
  {
    name: "Latest News",
  },
  {
    name: "Team Member",
  },
  {
    name: "Testimonials",
  },
];

const forumSupportArray = [
  { name: "Forum Support" },
  { name: "Help & FAQ" },
  {
    name: "Contact Us",
  },
  {
    name: "Pricing and Plans",
  },
  {
    name: "Cookie Policy",
  },
];

const Footer = () => {
  return (
    <>
      <Box sx={styles.mainContainer}>
        <Typography sx={styles.newsLetterHeading}>
          Join Our Newsletter
        </Typography>
        <Typography sx={styles.newsLetterTagline}>
          We Provide Best Pricing package to grow your lead capture
        </Typography>
        <Box sx={styles.fieldContainer}>
          <Box sx={styles.image}>
            <Image src={fieldImage} alt="field-image" />
          </Box>
          <TextField
            name="email"
            sx={styles.textField}
            placeholder="Email Address"
            type="email"
          />
          <Button sx={styles.subscribeBtn}>
            Subscribe
            <ArrowForwardIcon sx={{ ml: 0.5 }} />
          </Button>
          <Box sx={styles.image2}>
            <Image src={fieldImage} alt="field-image" />
          </Box>
        </Box>

        <Box sx={styles.footerInfoContainer}>
          <Box sx={styles.logoContainer}>
            <Image src={whiteLogo} alt="white-logo" width={300} />
            <Typography sx={styles.logoSubTagline}>
              Transforming Visions into Digital Realities
            </Typography>
            <Typography
              style={{ marginTop: "0.5rem" }}
              sx={styles.logoSubTagline}
            >
              Interested in working with us?
            </Typography>
            {/* <Typography sx={styles.email}>info@thetechietribe.com</Typography> */}
            <Box sx={styles.socialMediaIcons}>
              <Link
                color="#ffffff"
                href="https://www.facebook.com/profile.php?id=61557054675828&mibextid=LQQJ4d"
                target="_blank"
              >
                <FacebookIcon sx={styles.icon} />
              </Link>
              <Link
                color="#ffffff"
                href="https://www.instagram.com/thetechietribe_?igsh=ZTRodmlndWxrc3Jt"
                target="_blank"
              >
                <InstagramIcon sx={styles.icon} />
              </Link>
              <Link
                color="#ffffff"
                href="https://www.linkedin.com/company/techietribe/"
                target="_blank"
              >
                <LinkedInIcon sx={styles.icon} />
              </Link>
            </Box>
          </Box>
          <Box sx={styles.quickLinksContainer}>
            <Typography sx={styles.quickLinksHeading}>Quick Links</Typography>
            {quickLinksArray.map((data, index) => {
              return (
                <Typography sx={styles.quickLinks} key={index}>
                  {data.name}
                </Typography>
              );
            })}
          </Box>
          <Box sx={styles.quickLinksContainer}>
            <Typography sx={styles.quickLinksHeading}>My Accounts</Typography>
            {forumSupportArray.map((data, index) => {
              return (
                <Typography sx={styles.quickLinks} key={index}>
                  {data.name}
                </Typography>
              );
            })}
          </Box>
          <Box sx={styles.quickLinksContainer}>
            {/* <Typography sx={styles.quickLinksHeading}>Address</Typography>
          <Typography sx={styles.quickLinks}>Lahore, Pakistan</Typography> */}

            <Typography sx={styles.quickLinksHeading}>Hours</Typography>
            <Typography sx={styles.hours}>
              7.00pm – 4.00am
              <br></br>
              Monday to Friday
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#378C92",
        }}
      >
        <Box sx={styles.copyrightContainer}>
          <Box sx={styles.topHeaderContainer}>
            <Typography sx={styles.copyright}>
              Copyright © 2024 Techietribe. All Rights Reserved.
            </Typography>
            <Box sx={styles.topHeaderLinksContainer}>
              <Typography sx={styles.topHeaderLinks}>Company</Typography>
              <Typography sx={styles.topHeaderLinks}>Support</Typography>
              <Typography sx={styles.topHeaderLinks}>Privacy</Typography>
              <Typography sx={styles.topHeaderLinks}>Faqs</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
