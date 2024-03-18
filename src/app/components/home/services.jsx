import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

import WebDevIcon from "../../../../public/assets/pngs/services/WebDevelopment.png";
import MobileAppIcon from "../../../../public/assets/pngs/services/MobileApp.png";
import AppManagementSystem from "../../../../public/assets/pngs/services/AppManagementSystem.png";
import SoftwareInnovation from "../../../../public/assets/pngs/services/SoftwareInnovation.png";
import ArrowIcon from "../../../../public/assets/pngs/services/ArrowIcon.png";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px 40px",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#378C92",
  },
  subHeading: {
    fontSize: { xs: "20px", lg: "40px" },
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    mt: "3rem",
    gap: "30px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "40px 30px",
    width: "300px",
    borderTop: "8px solid #378C92",
    height: "350px",
    transition: "transform 0.3s ease",
    position: "relative",
    "&:nth-child(2n)": {
      mt: { xs: "0rem", lg: "3rem" },
    },
    "&:nth-child(4n)": {
      mt: { xs: "0rem", lg: "2rem" },
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    width: "90px",
    backgroundColor: "#378C92",
    borderRadius: "50%",
    padding: "20px",
  },

  cardHeading: {
    fontSize: "24px",
    lineHeight: "1.2",
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#000000",
    mt: "1rem",
    "&:hover": {
      color: "#378C92",
    },
  },
  cardContent: {
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#000000",
    mt: "1rem",
  },
};

const Services = () => {
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
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.heading}>REASON TO CHOOSE US</Typography>

      <Typography sx={styles.subHeading}>
        We provide truly prominent IT solutions.
      </Typography>

      <Box sx={styles.cardContainer}>
        {cardData.map((card, index) => (
          <Box key={index} sx={styles.card}>
            <Box sx={styles.iconContainer}>
              <Box sx={styles.icon}>
                <Image src={card.icon} width={50} height={45} />
              </Box>
              <Image src={ArrowIcon} width={30} />
            </Box>

            <Typography sx={styles.cardHeading}>{card.heading}</Typography>
            <Typography sx={styles.cardContent}>{card.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
