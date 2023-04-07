import React, { useContext } from "react";
import styled from "styled-components";
import { MenuContext, MenuContextInterface } from "../context/MenuContext";
import Youtube from "../svg/youtube";
import Facebook from "../svg/facebook";
import Instagram from "../svg/instagram";

const Container = styled.div<MenuContextInterface>`
  height: 30px;
  background-color: #302519;
  @media only screen and (max-width: 1024px) {
    position: fixed;
    z-index: 10000;
    top: 0;
    width: 100%;
    display: ${(props) => props.option && "none"};
    font-size: 12px;
  }
`;

const Wrapper = styled.div`
  padding: 0px 80px;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 380px) {
    padding: 0 10px;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  svg {
    margin-left: 5px;
    color: #ffe2b8;
    cursor: pointer;
    opacity: 0.6;
  }
  @media only screen and (max-width: 380px) {
    svg {
      font-size: 20px;
    }
  }
`;

const IconCon = styled.div`
  display: flex;
  svg{
    width: 20px;
    height: 20px;
    fill: #ac9678;
  }
`;
const TextCon = styled.div`
  color: white;
  @media only screen and (max-width: 380px) {
    font-size: 10px;
  }
`;
const Banner = () => {
  const { state } = useContext(MenuContext);
  const { option } = state;
  return (
    <Container option={option}>
      <Wrapper>
        <Items>
          <TextCon>
            BU ÖRNEK SİTEDİR, GERCEK SOLGAR SİTESİ İÇİN LÜTFEN solgar.com.tr'Yİ
            ZİYARET EDİNİZ.
          </TextCon>
          <IconCon>
            <Facebook />
            <Instagram />
            <Youtube />
          </IconCon>
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Banner;
