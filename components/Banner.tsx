import React, { useContext } from "react";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import styled from "styled-components";
import { MenuContext, MenuContextInterface } from "../context/MenuContext";

const Container = styled.div<MenuContextInterface>`
  height: 30px;
  background-color: #302519;
  @media only screen and (max-width: 768px) {
    position: fixed;
    z-index: 10000;
    top: 0;
    width: 100%;
    display: ${(props) => (props.option && "none")};

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
  justify-content: flex-end;
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

const Banner = () => {
  const {state} = useContext(MenuContext)
  const {option} = state
  return (
    <Container option = {option}>
      <Wrapper>
        <Items>
          <Facebook />
          <Instagram />
          <YouTube />
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Banner;
