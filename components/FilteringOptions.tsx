import { Close } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../context/MenuContext";
import { CatTitle, Check, IsCheck } from "./FilterProducts";

const Container = styled.div`
display: none;
@media only screen and (max-width: 768px) {
    display: block;
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    z-index: 10;
    background-color: #f7dbbe;
    transition: all 0.2s ease;
    color: #7f4f27;

  }

`;
const Wrapper = styled.div`
padding: 20px;`;
const Title = styled.h1`
font-size: 18px;

`;
const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;
const ListItem = styled.li`
padding: 10px 0;`;
const IconContainer = styled.div`
position: absolute;
top:20px;
right: 20px;
color: black;

`

const FilteringOptions = () => {
  const router = useRouter();
  const { dispatch} = useContext(MenuContext)

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
        dispatch({type:"OptionClose"})
      myFilter = e.currentTarget.id;
      router.replace({
        pathname: `/products`,
        query: { category: myFilter },
      });
    }
  };

  return (
    <Container>
      <Wrapper>
          <IconContainer onClick={() => dispatch({type:"OptionClose"})}>
              <Close/>
          </IconContainer>
        <Title>KATEGORİLER</Title>
        <List>
          <ListItem>
            <Check>
              <IsCheck
                onChange={(e) => cbChange(e)}
                onClick={(e) => handleClick(e)}
                type="checkbox"
                className="isCheck"
              />
            </Check>
            <CatTitle htmlFor="Tüm Ürünler">Tüm Ürünler</CatTitle>
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
        </List>
      </Wrapper>
    </Container>
  );
};

export default FilteringOptions;
