import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    z-index: 10000;
    background-color: #302519;
    transition: all 0.2s ease;
    color: white;
    top: 85px;
  
  }
`;

const Wrapper = styled.div`
  padding: 5px 20px 5px 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  height: 90vh;
`;

const ListItem = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const IconCon = styled.div``;

const List = styled.li`
  font-size: 15px;
  font-weight: 400;
  border-bottom: 1px solid white;
  padding: 18px 10px;
  border-bottom: 0.3px solid #f7c189fc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${IconCon} {
    svg {
      font-size: 14px;
    }
  }
`;

const ListChild = styled(List)`
border-bottom: 0.3px solid #d8d5d0fb;
`

const Menu = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [corporate, setCorporate] = useState(false);

  return (
    <Container>
      <Wrapper>
        <ListItem>
          <List onClick={() => setProductOpen(!productOpen)}>
            ÜRÜNLER
            <IconCon >
              <Add />
            </IconCon>
          </List>
          {productOpen && (
            <ListItem>
              <ListChild >Amino Asitler ve Proteinler</ListChild>
              <ListChild>Bitkisel Takviyeler</ListChild>
              <ListChild>Çocuk Ürünleri</ListChild>
              <ListChild>Esansiyel Yağ Asitleri</ListChild>
              <ListChild>Kalsiyumlar</ListChild>
              <ListChild>Koenzim Q-10</ListChild>
              <ListChild>Mineraller</ListChild>
              <ListChild>Multivitaminler</ListChild>
              <ListChild>Özel Takviteler</ListChild>
              <ListChild>Probiyotikler</ListChild>
              <ListChild>Vitaminler</ListChild>
              <ListChild>B Vitaminleri</ListChild>
            </ListItem>
          )}
          <List onClick={() => setCorporate(!corporate)}>
            KURUMSAL
            <IconCon >
              <Add />
            </IconCon>
          </List>
          {corporate && (
            <ListItem>
              <ListChild>Hakkımızda</ListChild>
              <ListChild>Felsefemiz</ListChild>
              <ListChild>Solgar Tarihi</ListChild>
              <ListChild>Altın Standart</ListChild>
              <ListChild>Ödül Kazanan Ürünler</ListChild>
            </ListItem>
          )}
          <List>EN YAKIN ECZANE</List>
          <List>İLETİŞİM</List>
        </ListItem>
      </Wrapper>
    </Container>
  );
};

export default Menu;
