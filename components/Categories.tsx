import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { catSlides } from "../data";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { Dot, Dots } from "./Slider";

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
`;

const Title = styled.div`
  margin-top: 20px;
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
`;

const Arrow = styled.div`
  top: 50%;
  position: absolute;
  cursor: pointer;
  z-index: 2;
  opacity: 0.3;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const SlideCon = styled.div`
  display: flex;
  transform: translate(0px);
  transition: all 1s ease;
`;

const CatWrapper = styled.div`
  height: 350px;
  background-color: white;
  margin-left: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  min-width: 39%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px solid #8f8f8f;
  overflow: hidden;
`;

const ImageCon = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  transition: all .5s ease;
  cursor: pointer;
  &:hover{
    transform: scale(1.15);
  }
`;

const SlideTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  height: 25%;
  z-index: 99;
  overflow: hidden;
  background-color: white;
`;

const Categories = () => {
  const [catSlide, setCatSlide] = useState(0);
  const catSlideRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setCatSlide(catSlide > 0 ? catSlide - 1 : 3);
    } else {
      setCatSlide(catSlide < 3 ? catSlide + 1 : 0);
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
  }, [catSlide]);

  return (
    <Container>
      <Title>
        <Text>KATEGORİLER</Text>
      </Title>
      <Slide>
        <Arrow style={{ left: 90 }} onClick={() => handleClick("left")}>
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
                  />
                </ImageCon>
                <SlideTitle>{slide.title}</SlideTitle>
              </CatWrapper>
            ))}
          </SlideCon>
        </Wrapper>
        <Arrow style={{ right: 90 }} onClick={() => handleClick("right")}>
          <ArrowForwardIosOutlined />
        </Arrow>
      </Slide>
      <Dots className="catDots">
        <Dot active={catSlide === 0}></Dot>
        <Dot active={catSlide === 1}></Dot>
        <Dot active={catSlide === 2}></Dot>
        <Dot active={catSlide === 3}></Dot>
      </Dots>
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
