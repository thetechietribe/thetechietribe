import React from "react";
import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";
import CountUp from "react-countup";
import Counter1 from "../../../../public/assets/pngs/projectsIndex/counter-1.png";
import Counter2 from "../../../../public/assets/pngs/projectsIndex/counter-2.png";
import Counter3 from "../../../../public/assets/pngs/projectsIndex/counter-3.png";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "40px 0px" },
    backgroundColor: "#ffffff",
    margin: "auto",
    width: { xs: "100%", md: "60rem", lg: "80rem" },
    gap: "1rem",
    borderRadius: "20px",
    border: "1px solid lightgray",
  },
  number: {
    fontSize: "40px",
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#378C92",
  },
  cardName: {
    fontSize: "12px",
    fontFamily: "Poppins",
    fontWeight: "300",
    color: "#313431",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    minWidth: "unset",
    minHeight: "unset",
    width: "auto",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

const projectsData = [
  { image: Counter1, number: 1790, name: "HAPPY CLIENTS" },
  { image: Counter2, number: 491, name: "FINISHED PROJECTS" },
  { image: Counter3, number: 245, name: "SKILLED EXPERTS" },
  { image: Counter1, number: 1090, name: "MEDIA POSTS" },
];

const ProjectsIndex = () => {
  return (
    <Box sx={styles.mainContainer}>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Box
            sx={{
              width: { xs: "100%", lg: "25%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box sx={styles.imageContainer}>
              <Image src={project.image} alt="counter" />
            </Box>
            <Box>
              <CountUp
                end={project.number}
                duration={2.5}
                separator=","
                prefix=""
                suffix=""
              >
                {({ countUpRef }) => (
                  <Typography sx={styles.number} ref={countUpRef} />
                )}
              </CountUp>
              <Typography sx={styles.cardName}>{project.name}</Typography>
            </Box>
          </Box>
          {index < projectsData.length - 1 && (
            <Divider orientation="vertical" flexItem />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ProjectsIndex;
