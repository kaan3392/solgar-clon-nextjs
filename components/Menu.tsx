import { Add } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { MenuContext } from "../context/MenuContext";
import { dropdownButtons } from "../data";

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
  const router = useRouter();
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
              <Add />
            </IconCon>
          </Lists>
          {productOpen && (
            <ListLoop/>
          )}
          <Lists onClick={() => setCorporate(!corporate)}>
            KURUMSAL
            <IconCon>
              <Add />
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
