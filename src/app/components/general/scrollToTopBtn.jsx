import React, { useState, useEffect } from "react";
import { Box, Button, Slide } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

const styles = {
  scrollToTopBtnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  scrollToTopBtn: {
    borderRadius: "50%",
    padding: "10px",
    border: "1px solid #378C92",
    cursor: "pointer",
    position: "fixed",
    bottom: { xs: "70px", md: "50px" },
    right: { xs: "20px", md: "50px" },
    // opacity: 0,
    // transition: "opacity 0.5s ease-in-out",
    zIndex: 999,
    minWidth: "unset",
    minHeight: "unset",
    width: "auto",
    height: "auto",
  },

  icon: {
    fontSize: "22px",
    color: "#378C92",
  },
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Box sx={styles.scrollToTopBtnContainer}>
          <Slide direction="left" in>
            <Button
              onClick={scrollToTop}
              sx={{
                ...styles.scrollToTopBtn,
                // opacity: isVisible ? 1 : 0,
                // transition: "opacity 0.5s ease-in-out",
              }}
            >
              <NorthIcon sx={styles.icon} />
            </Button>
          </Slide>
        </Box>
      )}
    </>
  );
};

export default ScrollToTopButton;
