import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

import ReactIcon from "../../../../public/assets/pngs/technologies/React.png";
import Angular from "../../../../public/assets/pngs/technologies/Angular.png";
import AWS from "../../../../public/assets/pngs/technologies/AWS.png";
import AWSAmplify from "../../../../public/assets/pngs/technologies/AWS-Amplify.png";
import GoogleCloud from "../../../../public/assets/pngs/technologies/Google-Cloud.png";
import Laravel from "../../../../public/assets/pngs/technologies/Laravel.png";
import NextIcon from "../../../../public/assets/pngs/technologies/Next.png";
import PostGres from "../../../../public/assets/pngs/technologies/PostGres.png";
import Rails from "../../../../public/assets/pngs/technologies/Rails.png";
import Vue from "../../../../public/assets/pngs/technologies/Vue.png";

const icons = [
  ReactIcon,
  Angular,
  NextIcon,
  Vue,
  AWS,
  AWSAmplify,
  Rails,
  GoogleCloud,
  Laravel,
  PostGres,
];

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "40px", lg: "80px 80px 0px 80px" },
    backgroundColor: "#ffffff",
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

  iconContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
  },

  icon: {
    width: "100px",
    height: "auto",
    margin: "0 10px",
  },
};

const TechnologyIndex = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.heading}>TECHNOLOGIES WE ARE USING</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "300px", lg: "100%" },
          overflow: { xs: "scroll", lg: "auto" },
          mt: "1rem",
          alignItems: "center",
        }}
      >
        {icons.map((data, index) => (
          <Image key={index} src={data} alt="icon" width={80} />
        ))}
      </Box>
    </Box>
  );
};

export default TechnologyIndex;
