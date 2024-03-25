import React from "react";
import Image from "next/image";

import { Box, Button, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import AboutImage from "../../../../public/assets/pngs/about/About.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: "center",
    padding: { xs: "40px", lg: "80px" },
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#378C92",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
  subHeading: {
    fontSize: { xs: "20px", lg: "40px" },
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#313431",
  },
  aboutContent: {
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#313431",
    mt: "2rem",
    lineHeight: "2",
  },
  aboutBtn: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "20px",
    height: { xs: "100%", sm: "60px" },
    borderRadius: "8px",
    padding: { xs: "10px 20px", sm: "0px 30px" },
    transition: "background-color 0.3s ease",
    letterSpacing: "2px",
    mt: "2rem",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },

  quoteContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    backgroundColor: "#378C92",
    padding: "50px",
    mt: "2rem",
    borderRadius: "20px",
  },

  quote: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#ffffff",
    opacity: 1,
    textAlign: "center",
  },
};

const About = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
        }}
      >
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Image src={AboutImage} alt="about" width={600} height={600} />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
      >
        <Image
          src={AboutImage}
          alt="about"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
          mt: { xs: "2rem", lg: "0rem" },
        }}
      >
        <Typography sx={styles.heading}>WHO WE ARE</Typography>
        <Typography sx={styles.subHeading}>
          Highly Tailored IT Design, Management & Support Services.
        </Typography>
        <Typography sx={styles.aboutContent}>
          Accelerate innovation with world-class tech teams We’ll match you to
          an entire remote team of incredible freelance talent for all your
          software development needs.
        </Typography>

        <Box sx={styles.quoteContainer}>
          <FormatQuote
            sx={{ color: "#ffffff", fontSize: 50, marginRight: "10px" }}
          />
          <Typography sx={styles.quote}>
            Accelerate innovation with world-class tech teams. We’ll match you
            to an entire remote.
          </Typography>
        </Box>

        <Button sx={styles.aboutBtn}>
          Explore More About
          <ArrowForwardIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default About;
