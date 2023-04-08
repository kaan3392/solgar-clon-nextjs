import React, { useContext, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { MenuContext } from "../context/MenuContext";
import { dropdownButtons } from "../data";
import Plus from "../svg/plus";

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
    position: fixed;
    z-index: 100;
    background-color: #302519;
    transition: all 0.2s ease;
    color: white;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 90px;
  }
`;

const Wrapper = styled.div`
  padding: 5px 20px 5px 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  /* height: 90vh; */
`;

const ListItem = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const IconCon = styled.div`
svg{
  width: 12px;
  height: 12px;
  fill:white;
}
`;

const Lists = styled.li`
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

const ListChild = styled(Lists)`
  border-bottom: 0.3px solid #d8d5d0fb;
`;

const Menu = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [corporate, setCorporate] = useState(false);
  const { dispatch } = useContext(MenuContext);

  const ListLoop: React.FunctionComponent = () => {
    return (
      <ListItem>
        {dropdownButtons.map((e, i) => {
          return (
            <Link key={i}
              href={{
                pathname: "/products",
                query: { category: e.id },
              }}
            >
              <ListChild onClick={() => dispatch({ type: "Close" })}>
                {e.title}
              </ListChild>
            </Link>
          );
        })}
      </ListItem>
    );
  };

  return (
    <Container>
      <Wrapper>
        <ListItem>
          <Lists onClick={() => setProductOpen(!productOpen)}>
            ÜRÜNLER
            <IconCon>
              <Plus />
            </IconCon>
          </Lists>
          {productOpen && (
            <ListLoop/>
          )}
          <Lists onClick={() => setCorporate(!corporate)}>
            KURUMSAL
            <IconCon>
              <Plus />
            </IconCon>
          </Lists>
          {corporate && (
            <ListItem>
              <ListChild>Hakkımızda</ListChild>
              <ListChild>Felsefemiz</ListChild>
              <ListChild>Solgar Tarihi</ListChild>
              <ListChild>Altın Standart</ListChild>
              <ListChild>Ödül Kazanan Ürünler</ListChild>
            </ListItem>
          )}
          <Lists>EN YAKIN ECZANE</Lists>
          <Lists>İLETİŞİM</Lists>
        </ListItem>
      </Wrapper>
    </Container>
  );
};

export default Menu;
