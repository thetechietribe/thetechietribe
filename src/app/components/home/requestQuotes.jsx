import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Typography, MenuItem, Button } from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import RoomIcon from "@mui/icons-material/Room";
import { MuiTelInput } from "mui-tel-input";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "80px 0px" },
    backgroundColor: "#ffffff",
    margin: "auto",
    width: { xs: "100%", md: "63rem", lg: "80rem" },
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
    fontSize: { xs: "20px", md: "40px" },
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
    backgroundColor: "#F6F6F9",
    "& label.Mui-focused": {
      color: "#378C92",
      width: "200px",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
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

  aboutBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  aboutBtn: {
    mt: "1.5rem",
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "18px",
    height: "40px",
    width: { xs: "100%", md: "140px" },
    padding: { xs: "20px", md: "25px 30px" },
    transition: "background-color 0.3s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
};
const RequestQuote = () => {
  const [selectValue, setSelectValue] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleChangeNumber = (newValue) => {
    setNumber(newValue);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const message = e.target.elements.message.value;

    const params = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        params,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Box sx={styles.mainContainer}>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            mt: { xs: "2rem", md: "0rem" },
          }}
        >
          <Typography sx={styles.heading}>REQUEST A QUOTE</Typography>
          <Typography sx={styles.subHeading}>
            Embrace Innovation With Advance Technologies
          </Typography>
          <Typography sx={styles.aboutContent}>
            At Techietribe, we use cutting-edge programming technology to
            generate creative solutions that are customized to your
            requirements. Because of the wide range of programming languages and
            technologies that our team specializes in, we are able to create
            reliable systems, websites, and apps.
          </Typography>

          <Typography sx={styles.hqHeading}>Headquarters</Typography>
          <Box sx={styles.hqContent}>
            <LocalPhoneRoundedIcon
              sx={{ color: "#313431", fontSize: "20px" }}
            />
            <Typography sx={styles.contact}>+92 300 456 1162</Typography>
          </Box>
          <Box sx={styles.hqContent}>
            <RoomIcon sx={{ color: "#313431", fontSize: "20px" }} />
            <Typography sx={styles.contact}>Lahore, Pakistan</Typography>
          </Box>
        </Box>
        <Box
          component="form"
          onSubmit={sendEmail}
          sx={{
            border: "1px solid lightgray",
            width: { xs: "100%", md: "50%" },
            mt: { xs: "2rem", md: "0rem" },
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
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <TextField
              size="small"
              name="firstName"
              placeholder="First Name"
              sx={styles.textField}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "gray",
                    opacity: 0.5,
                  },
                },
              }}
            />
            <TextField
              size="small"
              name="lastName"
              placeholder="Last Name"
              sx={styles.textField}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "gray",
                    opacity: 0.5,
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              width: "100%",
              mt: "1.5rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <TextField
              size="small"
              name="email"
              placeholder="Email"
              sx={styles.textField}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "gray",
                    opacity: 0.5,
                  },
                },
              }}
            />
            <MuiTelInput
              size="small"
              name="phoneNumber"
              value={number}
              onChange={handleChangeNumber}
              sx={styles.textField}
              defaultCountry="PK"
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "gray",
                    opacity: 0.5,
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", width: "100%", mt: "1.5rem" }}>
            <TextField
              size="small"
              name="select"
              id="select"
              label="How did you hear about us?"
              value={selectValue}
              select
              onChange={handleChange}
              sx={styles.textField}
              InputLabelProps={{
                style: {
                  color: "gray",
                  opacity: 0.5,
                },
              }}
            >
              <MenuItem value="facebook">Facebook</MenuItem>
              <MenuItem value="instagram">Instagram</MenuItem>
              <MenuItem value="linkedin">LinkedIn</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ display: "flex", width: "100%", mt: "1.5rem" }}>
            <TextField
              name="message"
              placeholder="Message"
              multiline
              rows={4}
              sx={styles.textField}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "gray",
                    opacity: 0.5,
                  },
                },
              }}
            />
          </Box>

          <Box sx={styles.aboutBtnContainer}>
            <Button type="submit" sx={styles.aboutBtn}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestQuote;
