"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import { Box, Slide, Typography } from "@mui/material";
import CallMadeTwoToneIcon from "@mui/icons-material/CallMadeTwoTone";

import WebDevIcon from "../../../../public/assets/pngs/services/WebDevelopment.png";
import MobileAppIcon from "../../../../public/assets/pngs/services/MobileApp.png";
import AppManagementSystem from "../../../../public/assets/pngs/services/AppManagementSystem.png";
import SoftwareInnovation from "../../../../public/assets/pngs/services/SoftwareInnovation.png";
import BackgroundImage from "../../../../public/assets/pngs/services/BgImg.jpeg";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "80px" },
    backgroundColor: "#ffffff",
    alignItems: "center",
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
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    mt: "3rem",
    gap: "26px",
    width: { xs: "100%", md: "63rem", lg: "80rem" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "40px 30px",
    width: { xs: "100%", md: "280px", lg: "300px" },
    borderTop: "8px solid #378C92",
    height: "400px",
    transition: "transform 0.3s ease",
    position: "relative",
    "&:nth-child(2n)": {
      mt: { xs: "0rem", md: "5rem" },
    },
    "&:nth-child(4n)": {
      mt: { xs: "0rem", md: "5rem" },
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${BackgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${BackgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(4px)",
  },

  cardBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // zIndex: ,
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(2px)",
  },

  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    mb: "5rem",
  },
  icon: {
    backgroundColor: "#378C92",
    borderRadius: "50%",
    padding: "15px",
    minWidth: "unset",
    minHeight: "unset",
    width: "auto",
    height: "auto",
  },

  cardHeading: {
    fontSize: "24px",
    lineHeight: "1.2",
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#ffffff",
  },
  cardContent: {
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#ffffff",
    mt: "1rem",
  },

  headingContainer: {
    display: "flex",
    gap: "0.5rem",
  },

  headingLine: {
    width: "5px",
    height: "100%",
    backgroundColor: "#378C92",
  },
};

const Services = () => {
  const mainIconRef = useRef(null);
  const arrowIconRef = useRef(null);
  const contentRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cardData = [
    {
      icon: WebDevIcon,
      heading: "Web Development",
      content:
        "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team.",
    },
    {
      icon: MobileAppIcon,
      heading: "Mobile App Development",
      content:
        "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team .",
    },
    {
      icon: SoftwareInnovation,
      heading: "Software Innovation",
      content:
        "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team.",
    },
    {
      icon: AppManagementSystem,
      heading: "App Management System",
      content:
        "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Box sx={styles.mainContainer}>
        <Typography sx={styles.heading}>REASON TO CHOOSE US</Typography>
        <Typography sx={styles.subHeading}>
          We provide truly prominent IT solutions.
        </Typography>
        <Box sx={styles.cardContainer}>
          {cardData.map((card, index) => (
            <Box
              key={index}
              sx={styles.card}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Box sx={styles.backgroundImage} />
              {hoveredIndex === index && (
                <Box sx={styles.iconContainer}>
                  <Box ref={mainIconRef}>
                    <Slide
                      direction="right"
                      in
                      timeout={500}
                      container={mainIconRef.current}
                    >
                      <Box sx={styles.icon}>
                        <Image
                          src={card.icon}
                          alt="icon"
                          width={50}
                          height={45}
                        />
                      </Box>
                    </Slide>
                  </Box>
                  <Box ref={arrowIconRef}>
                    <Slide
                      direction="left"
                      in
                      timeout={500}
                      container={arrowIconRef.current}
                    >
                      <CallMadeTwoToneIcon
                        sx={{
                          fontSize: "40px",
                          cursor: "pointer",
                        }}
                      />
                    </Slide>
                  </Box>
                </Box>
              )}

              <Box sx={styles.headingContainer}>
                <Box sx={styles.headingLine} />
                <Typography sx={styles.cardHeading}>{card.heading}</Typography>
              </Box>

              {hoveredIndex === index && (
                <Box ref={contentRef}>
                  <Slide
                    direction="up"
                    in
                    timeout={500}
                    container={contentRef.current}
                  >
                    <Typography sx={styles.cardContent}>
                      {card.content}
                    </Typography>
                  </Slide>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
