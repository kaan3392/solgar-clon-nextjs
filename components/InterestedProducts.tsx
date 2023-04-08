import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { interestedProducts } from "../data";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 60vh;
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
  align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Frame = styled.div`
  width: 25%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 48%;
  }
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
  text-align: center;
  
`;
const ImageTitle = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  text-align: center;
  @media only screen and (max-width: 768px) {
  }
`;

const InterestedProducts = () => {
  return (
    <Container >
      <Title >İLGİNİZİ ÇEKEBİLİR</Title>
      <MainContainer >
        <Wrapper>
          {interestedProducts.map((pro,i) => (
            <Link href={`/products/${pro.id}`} key={i}  >
            <Frame  >
              <ImageContainer>
                <Image  src={pro.img} alt="" layout="fill" objectFit="contain" />
              </ImageContainer>
              <ImageCat >{pro.categories}</ImageCat>
              <ImageTitle>{pro.title}</ImageTitle>
            </Frame>
            </Link>
          ))}
        </Wrapper>
      </MainContainer>
    </Container>
  );
};

export default InterestedProducts;

