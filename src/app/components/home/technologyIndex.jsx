import { Box } from "@mui/material";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReactIcon from "../../../../public/assets/pngs/technologies/React.png";
import Angular from "../../../../public/assets/pngs/technologies/Angular.png";
import NextIcon from "../../../../public/assets/pngs/technologies/Next.png";
import Vue from "../../../../public/assets/pngs/technologies/Vue.png";
import AWS from "../../../../public/assets/pngs/technologies/AWS.png";
import AWSAmplify from "../../../../public/assets/pngs/technologies/AWS-Amplify.png";
import Rails from "../../../../public/assets/pngs/technologies/Rails.png";
import GoogleCloud from "../../../../public/assets/pngs/technologies/Google-Cloud.png";
import Laravel from "../../../../public/assets/pngs/technologies/Laravel.png";
import PostGres from "../../../../public/assets/pngs/technologies/PostGres.png";
import Image from "next/image";

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

const Testimonials = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: { xs: "40px", lg: "80px 80px 0px 80px" },
        justifyContent: "center",
        backgroundColor: "#ffffff",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Swiper
          spaceBetween={30}
          slidesPerView={8}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {icons.map((icon, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                {icon === NextIcon ? (
                  <Image
                    src={icon}
                    alt={`Technology icon ${index}`}
                    width={80}
                  />
                ) : (
                  <Image src={icon} alt={`Technology icon ${index}`} />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
