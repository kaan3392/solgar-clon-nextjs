import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { slider } from "../data";
import { DotProps, ImageProps } from "./Types";

const Container = styled.div`
  height: calc(100vh - 130px);
  background-color: #fffaf3;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: calc(45vh - 85px);
  }
  @media only screen and (max-width: 380px) {
    height: calc(40vh - 85px);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  height: 90%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 100%;
    
  }
`;

const Arrow = styled.div`
  top: 50%;
  position: absolute;
  display: flex;
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`;

const ImageConLittle = styled.div<ImageProps>`
  width: ${(props) => (props.active ? "100%" : "0")};
  height: ${(props) => (props.active ? "100%" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: opacity .5s;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 380px) {
    object-fit: cover;
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div<DotProps>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "black" : "gray")};
  margin-left: 20px;
  opacity: ${(props) => (props.active ? "0.8" : "0.4")};
  margin-bottom: 10px;
`;

const Slider = () => {
  const [currentImg, setCurrentImg] = useState(1);

  const handleClick = (direction: string) => {
    if (direction === "right") {
      setCurrentImg(currentImg < slider.length ? currentImg + 1 : 1);
    } else {
      setCurrentImg(currentImg > 1 ? currentImg - 1 : slider.length);
    }
  };

  return (
    <Container>
      <SliderContainer>
        <Wrapper>
          <Arrow style={{ left: 10 }} onClick={() => handleClick("left")}>
            <ArrowBack />
          </Arrow>
          {slider.map((slide) => (
            <ImageConLittle active={slide.id === currentImg} key={slide.id}>
              <ImageContainer>
                <Image src={slide.img} alt="" layout="fill" objectFit="cover" priority />
              </ImageContainer>
            </ImageConLittle>
          ))}
          <Arrow style={{ right: 10 }}  onClick={() => handleClick("right")}>
            <ArrowForward />
          </Arrow>
        </Wrapper>
      </SliderContainer>
      <Dots>
        <Dot active={currentImg === 1}></Dot>
        <Dot active={currentImg === 2}></Dot>
        <Dot active={currentImg === 3}></Dot>
        <Dot active={currentImg === 4}></Dot>
        <Dot active={currentImg === 5}></Dot>
        <Dot active={currentImg === 6}></Dot>
        <Dot active={currentImg === 7}></Dot>
      </Dots>
    </Container>
  );
};

export default Slider;
