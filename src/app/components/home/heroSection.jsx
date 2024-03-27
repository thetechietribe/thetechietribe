"use client";

import React from "react";

import { Box, Button, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeroSectionVideo from "../../../../public/assets/video/HeroSectionVideo.mp4";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const styles = {
  mainContainer: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  videoContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
  },
  textContainer: {
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    fontSize: { xs: "30px", md: "60px" },
    margin: "0",
    fontWeight: "700",
    lineHeight: "1.2",
    fontFamily: "Poppins",
    letterSpacing: "2px",
  },

  linkArray: {
    display: { xs: "column", md: "flex" },
    gap: "15px",
    mt: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },

  tellUsBtn: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: { xs: "14px", sm: "20px" },
    height: { xs: "40px", lg: "60px" },
    borderRadius: "8px",
    padding: { xs: "0px 10px", sm: "0px 30px" },
    transition: "background-color 0.3s ease",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "2rem",
  },

  links: {
    display: "flex",
    color: "#fff",
    textAlign: "center",
    fontSize: { xs: "15px", md: "22px" },
    margin: "0",
    fontFamily: "Poppins",
    fontWeight: "200",
    letterSpacing: "2px",
    textDecoration: "none",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
  },

  linksIcon: {
    display: {
      xs: "none",
      md: "flex",
    },
    color: "#fff",
    fontSize: { xs: "10px", md: "10px" },
    margin: "0 5px",
    textAlign: "center",
  },
};

const HeroSection = () => {
  // const linksArray = [
  //   {
  //     name: "Enterprises",
  //   },
  //   {
  //     name: "Growth Companies",
  //   },
  //   {
  //     name: "Startups",
  //   },
  // ];

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.videoContainer}>
        <video playsInline autoPlay muted loop style={styles.video}>
          <source type="video/mp4" src={HeroSectionVideo} />
        </video>
      </Box>

      <div style={styles.overlay}></div>

      <Box sx={styles.textContainer}>
        <Typography sx={styles.heading}>
          We Engineer
          <br></br>
          Software Solutions
        </Typography>
        {/* <Box sx={styles.linkArray}>
          {linksArray?.map((data, index) => {
            const isLastItem = index === linksArray.length - 1;
            return (
              <Link
                key={index}
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Typography sx={styles.links}>
                  {data.name}{" "}
                  {!isLastItem && (
                    <FiberManualRecordIcon sx={styles.linksIcon} />
                  )}
                </Typography>
              </Link>
            );
          })}
        </Box> */}
        <Box sx={styles.btnContainer}>
          <Button sx={styles.tellUsBtn}>
            Tell Us About Your Project
            <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
