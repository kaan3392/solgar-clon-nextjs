import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import {
  KeyboardArrowDown,
  Search,
  DragHandle,
  Close,
} from "@mui/icons-material";
import Image from "next/image";
import { dropdownButtons } from "../data";
import Link from "next/link";
import { MenuContext, MenuContextInterface } from "../context/MenuContext";
import axios from "axios";
import { IProduct, Props } from "./Types";
import { useRouter } from "next/router";

const Container = styled.div<MenuContextInterface>`
  height: 100px;
  background-color: #fffaf3;
  border-bottom: 1px solid #d3b595;
  position: sticky;
  top: 0;
  z-index: 999;
  @media only screen and (max-width: 768px) {
    top: 30px;
    height: 55px;
    background-color: ${(props) => (props.menu ? "#302519" : "#fffaf3")};
    display: ${(props) => props.option && "none"};
  }
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
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
  @media only screen and (max-width: 380px) {
    padding: 0 5px;
  }
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 380px) {
    flex: 1.5;
  }
`;

const Center = styled.div`
  flex: 3;
  height: 100%;
  padding: 0 10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
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

const Right = styled.div<MenuContextInterface>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #d3b595;
  position: relative;
  svg {
    opacity: 0.8;
    color: gray;
    font-weight: lighter;
  }
  @media only screen and (max-width: 768px) {
    flex: 5;
    /* background-color: #fcead9; */
    background-color: ${(props) => (props.menu ? "#302519" : "#fffaf3")};
    border-radius: 5px;
    border-bottom: none;
    svg {
      font-size: 30px;
      font-weight: 300;
    }
  }
  @media only screen and (max-width: 380px) {
    margin-left: 5px;
  }
`;

const Input = styled.input<MenuContextInterface>`
  width: 100%;
  background-color: inherit;
  border: none;
  padding: 5px 5px 10px 5px;
  align-items: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 300;
    @media only screen and (max-width: 768px) {
      color: ${(props) => props.menu && "white"};
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 5px;
    font-weight: 300;
    background-color: ${(props) => (props.menu ? "#302519" : "inherit")};
    color: ${(props) => props.menu && "white"};
  }
  @media only screen and (max-width: 380px) {
    &::placeholder {
      font-size: 14px;
      padding-left: 5px;
      font-weight: 200;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      cursor: pointer;
      font-weight: lighter;
      font-size: 35px;
    }
  }
`;

const SearchCon = styled.div<MenuContextInterface>`
  @media only screen and (max-width: 768px) {
    display: ${(props) => props.menu && "none"};
  }
`;
const FilteredCon = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  top: 30px;
  padding: 0 5px;
  border: 1px solid gray;
  background-color: #dfd1bd;
`;
const Pro = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 5px;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid #cdaa75;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #d9c6aab2;
  }
  &:first-child {
    margin-top: 5px;
  }
  @media only screen and (max-width: 385px) {
    padding: 3px 5px;
  }
`;
const Text = styled.div`
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImageCon = styled.div<Props>`
  width: 45px;
  height: 45px;
  position: relative;
  margin-right: 5px;
  @media only screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const Navbar: React.FunctionComponent = () => {
  const [productDropdown, setProductDropdown] = useState(false);
  const [institutionalDropdown, setInstitutionalDropdown] = useState(false);
  const { state } = useContext(MenuContext);
  const { menu, option } = state;
  const { dispatch } = useContext(MenuContext);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [text, setText] = useState("");
  const router = useRouter();

  const pseudeoClick = () => {
    setInstitutionalDropdown(false);
    setProductDropdown(false);
  };

  useEffect(() => {
    if (text === "") return;
    const filterProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/products?filter=${text}`
        );
        console.log(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const timer = setTimeout(() => {
      filterProducts();
    }, 1500);
    return () => clearTimeout(timer);
  }, [text]);

  const handleClick = (id: string) => {
    router.push(`/products/${id}`);
    setText("");
  };

  return (
    <Container option={option} menu={menu}>
      {(productDropdown || institutionalDropdown) && (
        <PseudoCon onClick={pseudeoClick}></PseudoCon>
      )}
      <Wrapper>
        <Left>
          <Link href="/">
            <Image
              src="/img/solgar.PNG"
              alt=""
              width={220}
              height={100}
              objectFit="contain"
            />
          </Link>
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
                          href={`/products?category=${encodeURIComponent(
                            button.title
                          )}`}
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
        <Right menu={menu}>
          <Input
            onChange={(e) => setText(e.target.value)}
            menu={menu}
            value={text}
            type="text"
            placeholder="Solgar'da Ara"
          />
          <SearchCon menu={menu}>
            <Search />
          </SearchCon>
          {filteredProducts.length > 0 && text.length > 0 && (
            <FilteredCon>
              {filteredProducts.map((product, i) => (
                <Pro key={i} onClick={() => handleClick(product._id)}>
                  <ImageCon>
                    <Image
                      src={product.image}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </ImageCon>
                  <Text>{product.name}</Text>
                </Pro>
              ))}
            </FilteredCon>
          )}
        </Right>
        <MenuIcon>
          {menu ? (
            <Close
              onClick={() => dispatch({ type: "Close" })}
              style={{ color: "gray" }}
            />
          ) : (
            <DragHandle
              onClick={() => dispatch({ type: "Open" })}
              style={{ fontWeight: "300" }}
            />
          )}
        </MenuIcon>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
