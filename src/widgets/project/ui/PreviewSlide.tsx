import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";

interface PreviewSlideProps {
  images?: string[];
}

export const PreviewSlide = ({ images }: PreviewSlideProps) => {
  const handleImageClick = (image: string) => {
    const width = 1000;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      image,
      "_blank",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no,noopener,noreferrer`
    );
  };

  return images?.length !== 0 ? (
    <StyledSwiper
      spaceBetween={30}
      navigation={true}
      loop={true}
      modules={[Navigation]}
    >
      {images?.map((imageSrc) => (
        <StyledSwiperSlide onClick={() => handleImageClick(imageSrc)}>
          <Image src={imageSrc} title="클릭하여 크게보기" />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  ) : (
    <NotExistImage>Coming soon</NotExistImage>
  );
};


const StyledSwiper = styled(Swiper)`
  width: 26rem;
  height: 15rem;
  position: relative;

  .swiper-button-prev {
    position: absolute;
    left: -7px;
    transform: translateY(50%);
    scale: 0.4;
    color: #9bb7d4;
  }

  .swiper-button-next {
    position: absolute;
    right: -7px;
    scale: 0.4;
    color: #9bb7d4;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  cursor: pointer;
`;

const Image = styled.img`
  width: 23rem;
  height: 15rem;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 10px;

  &:hover {
    border: 4px solid #9bb7d4;
  }
`;

const NotExistImage = styled.div`
  width: 23rem;
  height: 15rem;
  background-color: #9bb7d4;
  color: #1c4e89;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
