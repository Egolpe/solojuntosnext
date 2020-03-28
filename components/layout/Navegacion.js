import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase/index";

const Nav = styled.nav`
  padding-left: 2rem;
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;
    &:last-of-type {
      margin-right: 0;
    }
    @media (max-width: 1024px) {
      display: flex;
    }
    @media (max-width: 768px) {
      margin: 0;
      display: grid;
    }
    @media (max-width: 450px) {
      margin: 0;
      margin-right: 5px;
      display: flex;
    }
  }
`;

const Navegacion = () => {
  const { usuario } = useContext(FirebaseContext);

  return (
    <Nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/populares">
        <a>Populares</a>
      </Link>
      {usuario && (
        <Link href="/nueva-carta">
          <a>Nueva Carta</a>
        </Link>
      )}
      {usuario && (
        <Link href="/mis-cartas">
          <a>Mis cartas</a>
        </Link>
      )}
    </Nav>
  );
};

export default Navegacion;
