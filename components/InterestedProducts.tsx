import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { interestedProducts } from "../data";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 50vh;
  }
`;
const Title = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  font-weight: 600;
  padding-bottom: 30px;
  @media only screen and (max-width: 768px) {
    margin: 20px 0px;
    padding-bottom: 0px;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Wrapper = styled.div`
  margin: 0px 70px;
  display: flex;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    margin: 0 10px;
  }
`;
const Frame = styled.div`
  width: 25%;
  height: 100%;
`;
const ImageContainer = styled.div`
width: 100%;
height: 70%;
position: relative;
cursor: pointer;

`;
const ImageCat = styled.div`
  font-size: 11px;
  color:#967332;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  
`;
const ImageTitle = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const InterestedProducts = () => {
  return (
    <Container >
      <Title >İLGİNİZİ ÇEKEBİLİR</Title>
      <MainContainer >
        <Wrapper>
          {interestedProducts.map((pro,i) => (
            <Frame key={i} >
              <ImageContainer>
                <Image  src={pro.img} alt="" layout="fill" objectFit="contain" />
              </ImageContainer>
              <ImageCat >{pro.categories}</ImageCat>
              <ImageTitle>{pro.title}</ImageTitle>
            </Frame>
          ))}
        </Wrapper>
      </MainContainer>
    </Container>
  );
};

export default InterestedProducts;

