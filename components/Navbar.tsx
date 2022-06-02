import React, { useState } from "react";
import styled from "styled-components";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import Image from "next/image";
import { dropdownButtons } from "../data";
import Link from "next/link";

const Container = styled.div`
  height: 100px;
  background-color: #fffaf3;
  border-bottom: 1px solid #d3b595;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const PseudoCon = styled.div`
  width: 100vw;
  height: calc(100vh - 130px);
  opacity: 0;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 0px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 3;
  height: 100%;
  padding: 0 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  height: 100%;
`;

const ListItems = styled.li<{
  productDropdown?: boolean;
  institutionalDropdown?: boolean;
}>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  height: 100%;
  padding: 0px 28px;
  cursor: pointer;
  z-index: 3;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: ${(props) => props.productDropdown && "#e2d8c4"};
  background-color: ${(props) => props.institutionalDropdown && "#e2d8c4"};
  position: ${(props) => props.institutionalDropdown && "relative"};
  svg {
    margin-left: 5px;
  }
  &:hover {
    height: 100%;
    background-color: #e2d8c4;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  background-color: #e2d8c4;
  width: 100vw;
  height: 60vh;
  padding: 20px 75px;
  position: absolute;
  top: 98px;
  left: 0px;
  z-index: 3;
`;

const PCLeft = styled.div`
  display: flex;
  flex: 7;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const PCLeftItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 15px;
  border: none;
  border-radius: 3px;
  width: calc(33% - 40px);
  background-color: #f0e4d1;
  font-size: 15px;
  font-weight: 500;
  &:last-child {
    text-align: center;
    width: 100%;
    justify-content: center;
  }
  &:hover {
    cursor: pointer;
    background-color: #302519;
    color: white;
  }
`;
const InstitutionalCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #e2d8c4;
  width: 16vw;
  position: absolute;
  top: 99px;
  left: 0px;
  padding: 25px 0px;
  overflow: hidden;
  z-index: 3;
`;

const InstiItem = styled.div`
  padding: 12px 33px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  text-align: start;
  font-size: 14px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #302519;
    color: white;
  }
`;

const PCRight = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  flex: 4;
  padding-left: 70px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #d3b595;
  svg {
    opacity: 0.8;
    color: gray;
    font-weight: lighter;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: inherit;
  border: none;
  padding: 5px 5px 15px 5px;
  align-items: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  :focus {
    outline: none;
  }
`;

const Navbar: React.FunctionComponent = () => {
  const [productDropdown, setProductDropdown] = useState(false);
  const [institutionalDropdown, setInstitutionalDropdown] = useState(false);

  const pseudeoClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setInstitutionalDropdown(false);
    setProductDropdown(false);
  };

  return (
    
      <Container>
        {(productDropdown || institutionalDropdown) && (
          <PseudoCon onClick={pseudeoClick}></PseudoCon>
        )}
        <Wrapper>
          <Left>
            <Image
              src="/img/solgar.PNG"
              alt=""
              width={220}
              height={100}
              objectFit="contain"
            />
          </Left>
          <Center>
            <List>
              <ListItems
                productDropdown={productDropdown}
                onClick={() => {
                  setProductDropdown(!productDropdown);
                  setInstitutionalDropdown(false);
                }}
              >
                ÜRÜNLER <KeyboardArrowDown />
                {productDropdown && (
                  <ProductContainer>
                    <PCLeft>
                      {dropdownButtons.map((button) => (
                        <PCLeftItems>
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            href="/products"
                          >
                            {button.title}
                          </Link>
                        </PCLeftItems>
                      ))}
                    </PCLeft>
                    <PCRight>
                      <Image
                        src="/img/droplogo.PNG"
                        alt=""
                        width={500}
                        height={150}
                      />
                    </PCRight>
                  </ProductContainer>
                )}
              </ListItems>
              <ListItems
                institutionalDropdown={institutionalDropdown}
                onClick={() => {
                  setInstitutionalDropdown(!institutionalDropdown);
                  setProductDropdown(false);
                }}
              >
                KURUMSAL <KeyboardArrowDown />
                {institutionalDropdown && (
                  <InstitutionalCon>
                    <InstiItem>Hakkımızda</InstiItem>
                    <InstiItem>Felsefemiz</InstiItem>
                    <InstiItem>Solgar Tarihi</InstiItem>
                    <InstiItem>Altın Standart</InstiItem>
                    <InstiItem>Ödül Kazanan Ürünler</InstiItem>
                  </InstitutionalCon>
                )}
              </ListItems>
              <ListItems>EN YAKIN ECZANE</ListItems>
              <ListItems>İLETİŞİM</ListItems>
            </List>
          </Center>
          <Right>
            <Input type="text" placeholder="Solgar'da Ara" />
            <Search />
          </Right>
        </Wrapper>
      </Container>
  );
};

export default Navbar;

