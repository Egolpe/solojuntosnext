import React from "react";
import { css } from "@emotion/core";

import styled from "@emotion/styled";
import Link from "next/link";

const style = {
  backgroundColor: "var(--naranja)",
  opacity: ".978",
  fontFamily: "Roboto Slab, serif",
  color: "White",
  textAlign: "center",
  position: "fixed",
  bottom: "0",
  height: "110px",
  width: "100%"
};
const phantom = {
  display: "block",
  height: "110px",
  width: "100%"
};

const parrafo = {
  justifyContent: "center"
};

const Nav = styled.nav`
  margin-top: 22px;
  a {
    font-size: 1.8rem;
    color: white;
    font-family: "PT Sans", sans-serif;
  }
`;

const Footer = () => {
  return (
    <div
      css={css`
        padding: 1rem 0;
        @media (max-width: 450px) {
          border-top: none;
        }
      `}
    >
      <div style={phantom} />
      <div style={style}>
        <div>
          <Nav>
            <Link href="/nosotros">
              <a>
                ¿Te apetece conocer el porqué de este proyecto o escribirnos?
              </a>
            </Link>
          </Nav>
          <p style={parrafo}>todos los derechos reservados &copy;</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
