import React, { useContext } from "react";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import styled from "styled-components";
import Image from "next/image";
import { HorizontalProps } from "./Types";
import { MenuContext, MenuContextInterface } from "../context/MenuContext";

const Container = styled.div<MenuContextInterface>`
  height: 90vh;
  width: 100%;
  background-color: #302519;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 60vh;
    display: ${props => props.menu && "none"  };
  }
  @media only screen and (max-width: 380px) {
    height: 80vh;
  }
`;

const Top = styled.div`
  padding: 30px 75px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid rgb(102, 93, 43);
  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
  @media only screen and (max-width: 380px) {
    padding: 20px;
    flex-direction: column;
  }
`;
const Item = styled.li`
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #ffdc8f;
  }
  svg {
    margin-right: 5px;
  }
`;

const List = styled.ul<HorizontalProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex-direction: ${(props) => props.horizontal && "row"};
    flex-wrap: wrap;
    align-content: stretch;
  }
`;

const ListGroup = styled.div`
  display: flex;
  flex: 1;
  &:nth-child(3) {
    flex: 2;
  }
  @media only screen and (max-width: 768px) {
    &:last-child,
    :first-child {
      display: none;
    }
    &:nth-child(2) {
      flex: 2.5;
      ${List} {
        ${Item} {
          width: 45%;
        }
      }
    }
  }
  @media only screen and (max-width: 380px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  color: rgb(240, 216, 82);
  font-weight: 600;
`;

const Logo = styled.div`
  width: 240px;
  height: 130px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0px;
  @media only screen and (max-width: 380px) {
    padding: 10px;
    text-align: center;
  }
`;

const BTitle = styled.h2`
  font-size: 16px;
  color: rgb(165, 150, 62);
  letter-spacing: 0.1rem;
  margin-bottom: 10px;
`;

const Address = styled.p`
  color: rgb(165, 150, 62);
  font-weight: 200;
  margin-bottom: 15px;
  font-size: 13px;
`;

const Text = styled.p`
  color: rgb(165, 150, 62);
  font-weight: 200;
  margin-bottom: 15px;
  font-size: 13px;
`;

const MobileCon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Footer = () => {
  const { state } = useContext(MenuContext);
  const { menu } = state;

  return (
    <Container menu={menu}>
      <Top>
        <ListGroup>
          <MobileCon>
            <Title>TAKİP EDİN</Title>
            <List>
              <Item>
                <Facebook /> Facebook
              </Item>
              <Item>
                <Instagram /> Instagram
              </Item>
              <Item>
                <YouTube /> Youtube
              </Item>
            </List>
          </MobileCon>
        </ListGroup>
        <ListGroup>
          <MobileCon>
            <Title>ÜRÜNLER</Title>
            <List horizontal>
              <Item>Amino Asitler ve Proteinler</Item>
              <Item>Bitkisel Takviyeler</Item>
              <Item>Çocuk Ürünleri</Item>
              <Item>Esansiyel Yağ Asitle</Item>
              <Item>Kalsiyum Grubu</Item>
              <Item>Koenzim Q-10</Item>
              <Item>Mineraller</Item>
              <Item>Multivitaminler</Item>
              <Item>Özel Takviyeler</Item>
              <Item>Probiyotikler</Item>
              <Item>Vitaminler</Item>
              <Item>B Vitaminleri</Item>
            </List>
          </MobileCon>
        </ListGroup>
        <ListGroup>
          <MobileCon>
            <Title>KURUMSAL</Title>
            <List>
              <Item>Hakkımızda</Item>
              <Item>Felsefemiz</Item>
              <Item>Solgar Tarihi</Item>
              <Item>Altın Standart</Item>
              <Item>Ödül Kazanan Ürünler</Item>
            </List>
          </MobileCon>
          <MobileCon>
            <Title>SOLGAR</Title>
            <List>
              <Item>İletişim</Item>
              <Item>En Yakın Eczane</Item>
              <Item>Sıkça Sorulan Sorular</Item>
              <Item>Gizlilik Politikası</Item>
              <Item>Çerez Politikası</Item>
            </List>
          </MobileCon>
        </ListGroup>
        <ListGroup>
          <Logo>
            <Image src="/img/solgar.PNG" width={220} height={120} />
          </Logo>
        </ListGroup>
      </Top>
      <Bottom>
        <BTitle>SOLGAR VİTAMİN VE SAĞLIK ÜRÜNLERİ SAN. VE TİC. A.Ş.</BTitle>
        <Address>
          Ebulula Mardin Caddesi No:45, 34330 Beşiktaş / İstanbul
        </Address>
        <Text>Tüm Hakları Saklıdır. © 2022 Solgar</Text>
      </Bottom>
    </Container>
  );
};

export default Footer;
