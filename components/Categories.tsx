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
  const [slideWidth, setSlideWidth] = useState<number>(0);
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
        <Arrow left onClick={() => handleClick("left")}>
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
        <Arrow right onClick={() => handleClick("right")}>
          <ArrowForwardIosOutlined />
        </Arrow>
      </Slide>
      <DotsLoop />
    </Container>
  );
};

export default Categories;

/*


const Categories = () => {



  

 

  return (
    <div className='catContainer'>
      <div className="catTitle">
        <h2 className='catText'>KATEGORİLER</h2>
      </div>
      <div className="catSlide">
        <div onClick={() => handleClick("left")} className="catArrowL"><ArrowBackIosOutlined /></div>
        <div className="catSlideWrapper">
          <div ref={catSlideRef} className="catSlideCon">
          {
            catSlides.map((slide) => (
                <div ref={slideRef} key={slide.id} className="catWrap">
                  <img className='catSlideImg' src={slide.img} alt="" />
                  <h2 className='catSlideTitle'>{slide.title}</h2>
                </div>
            ))
          }
          </div>
        </div>
        <div onClick={() => handleClick("right")} className="catArrowR"><ArrowForwardIosOutlined /></div>
      </div>
      <div className='catDots'>
        <div className={catSlide === 0 ? "activeCatDot" : "catDot"}></div>
        <div className={catSlide === 1 ? "activeCatDot" : "catDot"}></div>
        <div className={catSlide === 2 ? "activeCatDot" : "catDot"}></div>
        <div className={catSlide === 3 ? "activeCatDot" : "catDot"}></div>
      </div>
    </div>
  )
};

export default Categories

.catContainer{
    width: 100%;
    height: calc(100vh - 100px);
    background-color: #EFE5D8;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid rgba(233, 207, 63, 0.329);
    position: relative;
}

.catTitle{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.catText{
    color: #802C1C;
    font-size: 27px;
    padding-top: 30px;

}

.catSlide{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 118px;
}
.catSlideWrapper{
    width: 100%;
    display: flex;
    overflow: hidden;
}

.catSlideCon{
    display: flex;
    transform: translate(0px);
    transition: all 1s ease;
}

.catWrap{
    height: 300px;
    background-color: white;
    margin-left: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    min-width: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}


.catSlideImg{
width: 100%;
height: 80%;
}

.catSlideTitle{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    font-weight: 400;
}

.catArrowL{
    top: 50%;
    left: 90px;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    opacity: .3;
}

.catArrowR{
    top: 50%;
    right: 90px;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    opacity: .3;
}

.catDots{
    display: flex;
    align-items: center;
    justify-content: center;
}

.catDot{
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: gray;
    margin-left: 30px;
    opacity: .4;
    margin-bottom: 10px;
}

.activeCatDot{
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: black;
    margin-left: 30px;
    opacity: .8;
    margin-bottom: 10px;
}

*/
