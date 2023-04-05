import {
  ArrowDownward,
  ArrowUpward,
  KeyboardArrowUp,
} from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  ActiveArrowProps,
  ActiveProps,
  ActiveTitleProps,
  DirectionArrowProps,
  ImageProps,
  ProductProps,
  ShowActiveProps,
} from "./Types";

const Container = styled.div`
  width: 100%;
  height: 120vh;
  background-color: #fffaf3;
`;
const Wrapper = styled.div`
  padding: 0px 100px;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;
const WrapperTop = styled.div`
  padding: 40px 0px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`;
const WrapperBottom = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 80%;
  }
`;
const WrapperBottomLeft = styled.div`
  width: 60%;
  height: 90%;
  margin-right: 40px;
  display: flex;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const LittleSlide = styled.div`
  display: flex;
  position: relative;
  width: 19%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 22%;
}
`;
const LittleSlideCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transform: translate(0px);
  transition: all 1s ease;
`;
const ArrowCon = styled.div<DirectionArrowProps>`
  position: absolute;
  z-index: 2;
  top: ${(props) => props.upArrow && "0"};
  bottom: ${(props) => props.downArrow && "0"};
  left: 40%;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
const SmSlide = styled.div<ShowActiveProps>`
  width: 100%;
  min-height: 25%;
  position: relative;
  z-index: 3;
  border: ${(props) => props.showBorder && "1px solid rgb(185, 164, 44, .5)"};      
  &:after{
    content: "";
    position: absolute;
    top: calc(50% - 12px);
    left: 100%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-left-color: ${(props) => props.showBorder && "rgb(185, 164, 44, .5)"};

  }            
`;
const ImgContainerLittle = styled.div`
  z-index: 3;
  position: relative;
  width: 100%;
  height: 100%;
 
`;
const ImgContainerBig = styled.div<ImageProps>`
  width: ${(props) => (props.active ? "100%" : "0")};
  height: ${(props) => (props.active ? "100%" : "0")};
  z-index: 3;
  position: relative;
`;
const Diamond = styled.div`
  height: 20px;
  width: 20px;
  background-color: transparent;
  transform: rotate(-45deg);
  z-index: -1;
  position: absolute;
  right: -10px;
  border: 1px solid gold;
`;
const BigSlide = styled.div`
  width: 81%;
  height: 100%;
  z-index: 55;
  overflow: hidden;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-left: 10px;
}
`;
const WrapperBottomRight = styled.div`
  width: 40%;
  height: 90%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
}
`;
const ProductTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Productİnside = styled.p`
  margin-bottom: 20px;
`;
const AmountPrice = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
`;
const Amount = styled.div`
  background-color: #fcebdb;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 500;
  border: 0.5px solid rgb(185, 164, 44, 0.5);
  border-bottom: none;
  box-sizing: border-box;
  width: max-content;
  z-index: 999;
`;
const Price = styled.div`
  font-size: 15px;
  border: 0.5px solid rgb(185, 164, 44, 0.5);
  padding: 20px 15px;
  font-weight: 400;
  box-sizing: border-box;
`;
const MainContainer = styled.div<ActiveProps>`
  box-sizing: border-box;
  border: 0.5px solid rgb(185, 164, 44, 0.5);
  padding: 20px;
 border-bottom: ${props =>props.active && "none"};
`;
const Inside = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;
  align-items: center;
`;
const LittleDiv = styled.div<ActiveArrowProps>`
  display: flex;
  justify-content: space-between;
  align-items:${props => props.activeArrow && "center"} ;
  flex-direction: ${props => props.activeArrow ? "row" : "column"};
  cursor: pointer;
`;
const Text = styled.h4`
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 13px;
`;
const InsideArrowCon = styled.div<ActiveArrowProps>`
  cursor: pointer;
  transition: all 1s ease;
  transform: ${(props) => props.activeArrow && "rotate(-180deg)"};
  transform-origin: center;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InsideChoose = styled.div`
  display: flex;
  border-bottom: 0.5px solid rgb(185, 164, 44, 0.5);
  margin-bottom: 15px;
`;
const InsideChooseTitle = styled.div<ActiveTitleProps>`
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => props.activeTitle && "#FCEBDB"};
  border: ${(props) => props.activeTitle && "1px solid rgb(185, 164, 44, .5)"};
  border-bottom: ${(props) => props.activeTitle && "none"};
`;
const ActiveIngredient = styled.div`
  box-sizing: border-box;
`;
const ActiveIngredientTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  border-bottom: 0.5px solid rgb(185, 164, 44, 0.5);
  padding: 5px 0px;
`;
const ActiveIngredientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(185, 164, 44, 0.5);
  padding: 5px 0px;
`;
const Contents = styled.span`
  font-size: 15px;
  font-weight: 400;
`;
const Portion = styled.span`
  font-size: 12px;
`;
const OtherContent = styled.div`
  padding: 10px 0px;
`;
const OtherContentText = styled.p`
  font-size: 15px;
`;

const SingleProduct: React.FunctionComponent<ProductProps> = ({ product }) => {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(0);
  const [show, setShow] = useState(0);
  const [slideHeight, setSlideHeight] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (way: string) => {
    if (way === "up") {
      setSlide(slide > 0 ? slide - 1 : product.images?.length - 1);
    } else {
      setSlide(slide < product.images?.length - 1 ? slide + 1 : 0);
    }
  };

  useEffect(() => {
    if (!slideRef.current) {
      return;
    }
    setSlideHeight(slideRef.current.clientHeight);
    if (!wrapperRef.current) {
      return;
    }
    wrapperRef.current.style.transform = `translateY(${
      -slideHeight *
      Math.max(
        0,
        Math.min(slide, product.images?.length - (product.images?.length - 2))
      )
    }px)`;
  }, [slide, product.images?.length, slideHeight]);

  return (
    <Container>
      <Wrapper>
        <WrapperTop>
          ANA SAYFA / {product.category} / {product.name}{" "}
        </WrapperTop>
        <WrapperBottom>
          <WrapperBottomLeft>
            <LittleSlide>
              <ArrowCon upArrow={true} onClick={() => handleClick("up")}>
                <ArrowUpward />
              </ArrowCon>
              <LittleSlideCon ref={wrapperRef}>
                {product.images?.slice(0, 6).map((i, index) => (
                  <SmSlide
                    key={index}
                    ref={slideRef}
                    
                    showBorder={slide === index}
                  >
                    <ImgContainerLittle>
                      <Image src={i} alt="" layout="fill" objectFit="cover" />
                    </ImgContainerLittle>
                    {/* {slide === index && (
                      <Diamond style={{ top: "calc(50% - 10px)" }}></Diamond>
                    )} */}
                  </SmSlide>
                ))}
              </LittleSlideCon>
              <ArrowCon downArrow={true} onClick={() => handleClick("down")}>
                <ArrowDownward />
              </ArrowCon>
            </LittleSlide>
            <BigSlide>
              {product.images?.map((i, index) => (
                <ImgContainerBig active={index === slide} key={index}>
                  <Image src={i} layout="fill" objectFit="contain" alt="" />
                </ImgContainerBig>
              ))}
            </BigSlide>
          </WrapperBottomLeft>
          <WrapperBottomRight>
            <ProductTitle>{product.name}</ProductTitle>
            <Productİnside>{product.short}</Productİnside>
            <AmountPrice>
              <Amount>{product.amount}</Amount>
              <Price>TAVSİYE EDİLEN SATIŞ FİYATI : {product.price}</Price>
            </AmountPrice>
            <MainContainer active={true}>
              <Inside onClick={() => setOpen(open === 0 ? 4 : 0)}>
                <Text>İÇİNDEKİLER</Text>
                <InsideArrowCon
                  activeArrow={open === 0}
                >
                  <KeyboardArrowUp />
                </InsideArrowCon>
              </Inside>
              {open === 0 && (
                <LittleDiv>
                  <InsideChoose>
                    <InsideChooseTitle
                      activeTitle={show === 0}
                      onClick={() => setShow(0)}
                    >
                      ETKEN MADDELER
                    </InsideChooseTitle>
                    <InsideChooseTitle
                      activeTitle={show === 1}
                      onClick={() => setShow(1)}
                    >
                      DİĞER İÇERİKLER
                    </InsideChooseTitle>
                  </InsideChoose>
                  {show === 0 && (
                    <ActiveIngredient className="sPConActive">
                      <ActiveIngredientTitle>
                        {product.contents.header}
                      </ActiveIngredientTitle>
                      {Object.keys(product.contents).map((p, i) =>
                        p !== "header" ? (
                          <ActiveIngredientContainer key={i}>
                            <Contents>{p}</Contents>
                            <Portion>{product.contents[p]}</Portion>
                          </ActiveIngredientContainer>
                        ) : (
                          null
                        )
                      )}
                    </ActiveIngredient>
                  )}
                  {show === 1 && (
                    <OtherContent>
                      <OtherContentText>
                        {product.otherContents}
                      </OtherContentText>
                    </OtherContent>
                  )}
                </LittleDiv>
              )}
            </MainContainer>
            <MainContainer active={true}>
              <LittleDiv onClick={() => setOpen(open === 1 ? 4 : 1)} activeArrow={true}>
                <Text>KULLANIM ÖNERİSİ</Text>
                <InsideArrowCon
                  activeArrow={open === 1}
                  
                >
                  <KeyboardArrowUp />
                </InsideArrowCon>
              </LittleDiv>
              {open === 1 && <p>{product.howToUse}</p>}
            </MainContainer>
            <MainContainer>
              <LittleDiv onClick={() => setOpen(open === 2 ? 4 : 2)} activeArrow={true}>
                <Text>EK BİLGİ</Text>
                <InsideArrowCon
                  activeArrow={open === 2}
                  
                >
                  <KeyboardArrowUp />
                </InsideArrowCon>
              </LittleDiv>
              {open === 2 && <p>{product.extraInfo}</p>}
            </MainContainer>
          </WrapperBottomRight>
        </WrapperBottom>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;