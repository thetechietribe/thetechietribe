import React from "react";

import { Box, Button, Card, Typography } from "@mui/material";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { CheckBox } from "@mui/icons-material";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "40px", lg: "80px" },
    backgroundColor: "#F6F6F9",
    alignItems: "center",
  },

  heading: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#378C92",
    marginBottom: "20px",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },

  subHeading: {
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#313431",
    textAlign: "center",
    width: { xs: "100%", lg: "80%" },
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 30px",
    borderRadius: "20px",
    width: "100%",
    mt: "2rem",
    transition: "backgroundColor 0.5s ease",

    "&:hover": {
      backgroundColor: "#378C92",
      "& .text": {
        color: "#ffffff",
      },

      "& .quoteBtn": {
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "1px solid #ffffff",
      },

      "& .popular": {
        color: "#ffffff",
        backgroundColor: "#97AFAE",
      },
      "& .icon": {
        backgroundColor: "#ffffff",
      },
    },
  },

  iconContainer: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #378C92",
    borderRadius: "10px",
    width: "max-content",
  },

  cardTopText: {
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#313431",
  },

  cardHeading: {
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#378C92",
  },

  cardData: {
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#00000",
  },

  cardTagline: {
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#00000",
  },

  quoteBtn: {
    mt: "2rem",
    color: "#378C92",
    textTransform: "none",
    backgroundColor: "white",
    border: "1px solid #378C92",
    fontSize: "16px",
    width: { xs: "200px", lg: "150px" },
    height: "45px",
    transition: "0.5 ease",
    transition: "0.5s ease",
    letterSpacing: "2px",

    "&:hover": {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "1px solid #ffffff",
    },
  },
};

const data = [
  {
    id: 1,
    content: "Assess specs to cover all the if’s but’s and what if's",
  },
  {
    id: 2,
    content: "Visualize your end product without spending money on development",
  },
  {
    id: 3,
    content:
      "Focus on your core business while we take care of the technicalities",
  },
  {
    id: 4,
    content: "Support via E-mail and Phone",
  },
  {
    id: 5,
    content: "Augment your existing in-house / external team",
  },
  {
    id: 6,
    content: "Develop a product - working in a true agile fashion",
  },
  {
    id: 7,
    content: "Maintain & support your existing product",
  },
  {
    id: 8,
    content: "Visualize your end product without spending money on development",
  },
];

const EngagementPlan = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.heading}>ENGAGEMENT PLAN</Typography>

      <Typography sx={styles.subHeading}>
        We’re open to discussing your ideas and look forward to bringing them to
        life with our engineering excellence. Choose the plan that best fit your
        needs, and let’s start getting work
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          width: "100%",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Card sx={styles.cardContainer}>
          <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
            <Box sx={styles.iconContainer} className="icon">
              <MonetizationOnRoundedIcon
                sx={{ fontSize: "35px", color: "#378C92" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={styles.cardTopText} className="text">
                For Projects
              </Typography>
              <Typography sx={styles.cardHeading} className="text">
                Fixed Price
              </Typography>
            </Box>
          </Box>

          <Typography sx={styles.cardTagline} className="text">
            On time. Within budget. As per expectations
          </Typography>

          {data.slice(0, 3).map((item) => (
            <Box
              key={item.id}
              sx={{ display: "flex", gap: "0.5rem", mt: "1rem" }}
            >
              <CheckBox
                sx={{ color: "#378C92", borderRadius: "10px" }}
                className="text"
              />
              <Typography sx={styles.cardData} className="text">
                {item.content}
              </Typography>
            </Box>
          ))}

          <Button className="quoteBtn" sx={styles.quoteBtn}>
            Get A Quote
          </Button>
        </Card>
        <Card sx={styles.cardContainer}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
              <Box sx={styles.iconContainer} className="icon">
                <Person2RoundedIcon
                  sx={{ fontSize: "35px", color: "#378C92" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={styles.cardTopText} className="text">
                  For Dedicated Teams
                </Typography>
                <Typography sx={styles.cardHeading} className="text">
                  IT Experts
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                display: { xs: "none", lg: "flex" },
                backgroundColor: "#F6F6F9",
                fontSize: "16px",
                color: "#313431",
                borderRadius: "12px",
                padding: "5px 25px",
                height: "max-content",
                fontWeight: "00",
              }}
              className="popular"
            >
              Popular
            </Typography>
          </Box>

          <Typography sx={styles.cardTagline} className="text">
            High-performing, on-demand teams of IT Experts
          </Typography>

          {data.slice(4, 7).map((item) => (
            <Box
              key={item.id}
              sx={{ display: "flex", gap: "0.5rem", mt: "1rem" }}
            >
              <CheckBox
                sx={{ color: "#378C92", borderRadius: "10px" }}
                className="text"
              />
              <Typography sx={styles.cardData} className="text">
                {item.content}
              </Typography>
            </Box>
          ))}

          <Button className="quoteBtn" sx={styles.quoteBtn}>
            Get A Quote
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default EngagementPlan;
