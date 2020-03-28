import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase/index";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 778px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 777px) {
    .login {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
  @media (max-width: 1024px) {
    line-height: 0.8;
    align-items: center;
  }
  @media (max-width: 778px) {
    line-height: 0.8;
  }
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
        }
        @media (max-width: 450px) {
          border-bottom: none;
          margin-left: 15px;
          width: 270%;
        }
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>Solo Juntos</Logo>
          </Link>

          <Buscar />

          <Navegacion />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {usuario ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hola {usuario.displayName}
              </p>

              <Boton bgColor="true" onClick={() => firebase.cerrarSesion()}>
                Cerrar Sesión
              </Boton>
            </>
          ) : (
            <div className="login">
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </div>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
