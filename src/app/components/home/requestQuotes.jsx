"use client";

import React, { useState } from "react";

import { Box, TextField, Typography, MenuItem, Button } from "@mui/material";

import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import RoomIcon from "@mui/icons-material/Room";

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
    mt: "1rem",
    lineHeight: "2",
  },

  hqHeading: {
    fontSize: "28px",
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#378C92",
    mt: "4rem",
  },

  hqContent: {
    mt: "1rem",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },

  contact: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#313431",
    cursor: "pointer",

    "&:hover": {
      color: "#378C92",
    },
  },

  formHeading: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#313431",
  },

  textField: {
    width: "100%",
    borderRadius: "10px",
    "& label.Mui-focused": {
      color: "#378C92",
      borderRadius: "10px",
      width: "200px",
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

  selectField: {
    width: "100%",
    borderRadius: "10px",
    "& .MuiOutlinedSelect-root": {
      "& fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },
    },
    "& .MuiSelect-iconOutlined": {
      color: "#378C92",
    },
  },

  aboutBtn: {
    mt: "1rem",
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "20px",
    height: "30px",
    width: { xs: "100%", lg: "150px" },
    padding: { xs: "20px", lg: "20px 40px" },
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
};

const RequestQuote = () => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
          mt: { xs: "2rem", lg: "0rem" },
        }}
      >
        <Typography sx={styles.heading}>REQUEST A QUOTE</Typography>
        <Typography sx={styles.subHeading}>
          Embrace Innovation With Advance Technologies
        </Typography>
        <Typography sx={styles.aboutContent}>
          At Techietribe, we use cutting-edge programming technology to generate
          creative solutions that are customized to your requirements. Because
          of the wide range of programming languages and technologies that our
          team specializes in, we are able to create reliable systems, websites,
          and apps.
        </Typography>

        <Typography sx={styles.hqHeading}>Headquarters</Typography>
        <Box sx={styles.hqContent}>
          <LocalPhoneRoundedIcon sx={{ color: "#313431", fontSize: "20px" }} />
          <Typography sx={styles.contact}>+92 300 456 1162</Typography>
        </Box>
        <Box sx={styles.hqContent}>
          <RoomIcon sx={{ color: "#313431", fontSize: "20px" }} />
          <Typography sx={styles.contact}>Lahore, Pakistan</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
          mt: { xs: "2rem", lg: "0rem" },
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <Typography sx={styles.formHeading}>Get in touch with us</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            mt: "1rem",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <TextField label="First Name" sx={styles.textField} />
          <TextField label="Last Name" sx={styles.textField} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            mt: "1rem",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <TextField label="Email" sx={styles.textField} />
          <TextField label="Phone Number" sx={styles.textField} />
        </Box>
        <Box sx={{ display: "flex", width: "100%", mt: "1rem" }}>
          <TextField
            sx={styles.textField}
            id="select"
            label="How did you hear about us?"
            value={selectValue}
            select
            onChange={handleChange}
          >
            <MenuItem value="facebook">Facebook</MenuItem>
            <MenuItem value="instagram">Instagram</MenuItem>
            <MenuItem value="linkedin">LinkedIn</MenuItem>
          </TextField>
        </Box>

        <Box sx={{ display: "flex", width: "100%", mt: "1rem" }}>
          <TextField sx={styles.textField} label="Message" multiline rows={4} />
        </Box>

        <Button sx={styles.aboutBtn}>Submit</Button>
      </Box>
    </Box>
  );
};

export default RequestQuote;
