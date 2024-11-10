import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Autoplay } from "swiper/modules";
import Project from "../project";
import styled from "styled-components";
import projects from "@/e_entities/projects";

interface SlideProps {
  onClick: (id: number) => void;
}

const ProjectSlide = ({ onClick }: SlideProps) => {
  return (
    <StyledSwiper
      direction="vertical"
      grabCursor={true}
      slidesPerView={"auto"}
      spaceBetween={30}
      loopAddBlankSlides={true}
      centeredSlides={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      speed={4000}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {projects.map(({ id, title, fullLogo }) => (
        <StyledSwiperSlide key={id} onClick={() => onClick(id)}>
          <Project title={title} logoSrc={fullLogo} />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default ProjectSlide;

const StyledSwiper = styled(Swiper)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  box-sizing: border-box;
  padding-right: 100px;

  .swiper-wrapper {
    transition-timing-function: linear;
    overflow: visible;
    height: 100vh;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: fit-content !important;
  height: fit-content !important;
`;
