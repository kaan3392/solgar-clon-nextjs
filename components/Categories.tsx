import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { catSlides } from "../data";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { Dot, Dots } from "./Slider";
import { ArrowDirectionProps } from "./Types";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #efe5d8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid rgba(233, 207, 63, 0.329);
  position: relative;
  padding-top: 20px;
  @media only screen and (max-width: 768px) {
    height: calc(65vh - 85px);
  }
  @media only screen and (max-width: 380px) {
    height: calc(75vh - 85px);
  }
`;

const Title = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  color: #802c1c;
  font-size: 27px;
  padding-top: 30px;
`;

const Slide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 120px;
  @media only screen and (max-width: 768px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 380px) {
    padding: 0 20px;
  }
`;

const Arrow = styled.div<ArrowDirectionProps>`
  top: 50%;
  position: absolute;
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
  left: ${(props) => props.left && "90px"};
  right: ${(props) => props.right && "90px"};
  @media only screen and (max-width: 768px) {
    left: ${(props) => props.left && "10px"};
    right: ${(props) => props.right && "10px"};
  }
  @media only screen and (max-width: 768px) {
    left: ${(props) => props.left && "20px"};
    right: ${(props) => props.right && "20px"};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const SlideCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 1s ease;
  width: 100%;
`;

const CatWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  height: 350px;
  background-color: white;
  margin-left: 10px;
  min-width: 24.5%;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom: 1px solid #8f8f8f;
  &:first-child {
    margin-left: 0;
  }
  @media only screen and (max-width: 768px) {
    min-width: 49%;
  }
  @media only screen and (max-width: 380px) {
    min-width: 100%;
    height: 300px;
 
  }
`;

const ImageCon = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
`;

const SlideTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  height: 25%;
  width: 100%;
  z-index: 99;
  overflow: hidden;
  background-color: white;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Categories = () => {
  const [catSlide, setCatSlide] = useState(0);
  const [numberOfProductShown, setNumberOfProductShown] = useState<any>(null);
  const catSlideRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setCatSlide(
        catSlide > 0 ? catSlide - 1 : catSlides.length - numberOfProductShown
      );
    } else {
      setCatSlide(
        catSlide < catSlides.length - numberOfProductShown ? catSlide + 1 : 0
      );
    }
  };

  useEffect(() => {
    if (!slideRef.current) {
      return;
    }
    const slideWidth = slideRef.current.clientWidth;
    if (!catSlideRef.current) {
      return;
    }
    catSlideRef.current.style.transform = `translateX(${
      -slideWidth * catSlide - 10 * catSlide
    }px)`;
    setNumberOfProductShown(
      Math.round(catSlideRef.current.clientWidth / slideRef.current.clientWidth)
    );
  }, [catSlide]);

  const DotsLoop: React.FunctionComponent = () => {
    return (
      <Dots>
        {[...Array(catSlides.length - numberOfProductShown + 1)].map((e, i) => {
          return <Dot key={i} active={catSlide === i}></Dot>;
        })}
      </Dots>
    );
  };

  return (
    <Container>
      <Title>
        <Text>KATEGORİLER</Text>
      </Title>
      <Slide>
        <Arrow left={true} onClick={() => handleClick("left")}>
          <ArrowBackIosOutlined />
        </Arrow>
        <Wrapper>
          <SlideCon ref={catSlideRef}>
            {catSlides.map((slide) => (
              <CatWrapper ref={slideRef} key={slide.id}>
                <ImageCon>
                  <Image
                    src={slide.img}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </ImageCon>
                <SlideTitle>{slide.title}</SlideTitle>
              </CatWrapper>
            ))}
          </SlideCon>
        </Wrapper>
        <Arrow right={true} onClick={() => handleClick("right")}>
          <ArrowForwardIosOutlined />
        </Arrow>
      </Slide>
      <DotsLoop />
    </Container>
  );
};

export default Categories;
