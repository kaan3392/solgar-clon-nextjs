import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import { ProductsProps } from "./Types";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuContext, MenuContextInterface } from "../context/MenuContext";
import FilteringOptions from "./FilteringOptions";

const Container = styled.div<MenuContextInterface>`
  height: 120vh;
  width: 100%;
  background-color: #fffaf3;
  padding: 40px 0px;
  @media only screen and (max-width: 768px) {
    height: 100vh;
    padding: ${(props) => (props.option ? "0px " : "20px 0px")};
    position: relative;
  }
`;
const Wrapper = styled.div<MenuContextInterface>`
  height: 100%;
  margin: 0px 80px 0px 100px;
  display: flex;
  @media only screen and (max-width: 768px) {
    margin: ${(props) => (props.option ? "0" : "20px")};
  }
`;
const MainContainer = styled.div`
  height: 100%;
  flex: 10;
  display: flex;
  flex-direction: column;
`;
const Left = styled.div`
  flex: 3;
  border-right: 1px solid rgb(173, 160, 86, 0.5);
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const LeftWrapper = styled.div`
  padding: 20px 0px;
`;
const LeftTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const LeftList = styled.ul`
  list-style: none;
  padding: 0;
`;
const LeftListItem = styled.li`
  margin: 20px 0px;
  letter-spacing: 1px;
  font-size: 15px;
  display: flex;
  align-items: center;
`;
export const Check = styled.span``;

export const IsCheck = styled.input`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;
export const CatTitle = styled.label`
  margin-left: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  width: 100%;
  height: 95%;
`;
const RightWrapper = styled.div`
  height: 100%;
  padding: 20px 20px 50px 20px;
  display: flex;
  flex-direction: column;
`;
const RightTitle = styled.div`
  font-size: 30px;
  margin: 20px 0px 40px 0px;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const RightContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ProductContainer = styled.div`
  width: 25%;
  height: 300px;
  cursor: pointer;
  margin-bottom: 30px;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;
const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  text-align: center;
`;
const ProductCat = styled.div`
  font-size: 11px;
  color: gold;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
const Paginate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  height: 10%;
`;
const PaginateLine = styled.div`
  display: flex;
`;
const Arrow = styled.div`
  cursor: pointer;
`;
const PageNumber = styled.div`
  margin-right: 10px;
`;

const FilteredButton = styled.button`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    background-color: #d49d63;
    position: absolute;
    border: none;
    outline: none;
    top: 50px;
    right: 40px;
    padding: 2px 5px;
    color: white;
    cursor: pointer;
  }
`;

const FilterProducts: React.FunctionComponent<ProductsProps> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const router = useRouter();
  const { state, dispatch } = useContext(MenuContext);
  const { option } = state;

  const cbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cbs = document.getElementsByTagName("input");
    for (let i = 0; i < cbs?.length; i++) {
      cbs[i].checked = false;
    }
    e.target.checked = true;
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    let myFilter;
    if (e.currentTarget.checked) {
      myFilter = e.currentTarget.id;
      router.replace({
        pathname: `/products`,
        query: { category: myFilter },
      });
      setCurrentPage(1);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = props.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <Container option={option}>
      {option ? (
        <FilteringOptions />
      ) : (
        <FilteredButton onClick={() => dispatch({ type: "OptionOpen" })}>
          FİLTRE
        </FilteredButton>
      )}
      <Wrapper option={option}>
        <Left>
          <LeftWrapper>
            <LeftTitle>KATEGORİLER</LeftTitle>
            <LeftList>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                  />
                </Check>
                <CatTitle htmlFor="Tüm Ürünler">Tüm Ürünler</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Amino asitler ve Proteinler"
                  />
                </Check>
                <CatTitle htmlFor="Amino asitler ve Proteinler">
                  Amino Asitler ve Proteinler
                </CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Bitkisel Takviyeler"
                  />
                </Check>
                <CatTitle htmlFor="Bitkisel Takviyeler">
                  Bitkisel Takviyeler
                </CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Cocuk Ürünleri"
                  />
                </Check>
                <CatTitle htmlFor="Cocuk Ürünleri">Çocuk Ürünleri</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Esansiyel Yag Asitleri"
                  />
                </Check>
                <CatTitle htmlFor="Esansiyel Yag Asitleri">
                  Esansiyel Yağ Asitleri
                </CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Kalsiyum Grubu"
                  />
                </Check>
                <CatTitle htmlFor="Kalsiyum Grubu">Kalsiyum Grubu</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Koenzim Q-10"
                  />
                </Check>
                <CatTitle htmlFor="Koenzim Q-10">Koenzim Q-10</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Mineraller"
                  />
                </Check>
                <CatTitle htmlFor="Mineraller">Mineraller</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Multivitaminler"
                  />
                </Check>
                <CatTitle htmlFor="Multivitaminler">Multivitaminler</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Özel Takviyeler"
                  />
                </Check>
                <CatTitle htmlFor="Özel Takviyeler">Özel Takviyeler</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Probiyotikler"
                  />
                </Check>
                <CatTitle htmlFor="Probiyotikler">Probiyotikler</CatTitle>
              </LeftListItem>
              <LeftListItem>
                <Check>
                  <IsCheck
                    onChange={(e) => cbChange(e)}
                    onClick={(e) => handleClick(e)}
                    type="checkbox"
                    className="isCheck"
                    id="Vitaminler"
                  />
                </Check>
                <CatTitle htmlFor="Vitaminler">Vitaminler</CatTitle>
              </LeftListItem>
            </LeftList>
          </LeftWrapper>
        </Left>
        <MainContainer>
          <Right>
            <RightWrapper>
              <RightTitle>TÜM ÜRÜNLER</RightTitle>
              <RightContainer>
                {currentProducts.map((product, i) => (
                  <Link href={`/products/${product._id}`} key={i}>
                    <ProductContainer>
                      <ImageContainer>
                        <Image
                          src={product.image}
                          alt=""
                          layout="fill"
                          objectFit="contain"
                        />
                      </ImageContainer>
                      <ProductCat>{product.category}</ProductCat>
                      <ProductTitle>{product.name}</ProductTitle>
                    </ProductContainer>
                  </Link>
                ))}
              </RightContainer>
            </RightWrapper>
          </Right>
          <Paginate>
            <PaginateLine>
              <PageNumber>
                {indexOfFirstProduct +
                  1 +
                  " - " +
                  Math.min(indexOfLastProduct, props.products.length) +
                  " / " +
                  props.products.length}
              </PageNumber>
              <Arrow
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
              >
                <ArrowBackIos />
              </Arrow>
              <Arrow
                onClick={() => {
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      Math.ceil(props.products.length / productsPerPage)
                    )
                  );
                }}
              >
                <ArrowForwardIos />
              </Arrow>
            </PaginateLine>
          </Paginate>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default FilterProducts;
