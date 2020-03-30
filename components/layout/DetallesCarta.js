import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Link from "next/link";
import { css } from "@emotion/core";

const Carta = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  @media (max-width: 450px) {
    padding: 1rem;
    border-top: 1px solid #e1e1e1;
  }
`;
const DescripcionCarta = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
`;

const Titulo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`;

const TextoDescripcion = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: #888;
`;

const Comentarios = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    padding: 0.3rem 1rem;
    margin-right: 2rem;
  }
  img {
    width: 2rem;
    margin-right: 2rem;
  }
  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;
    &:last-of-type {
      margin: 0;
    }
  }
`;

const Imagen = styled.img`
  width: 200px;
`;

const Votos = styled.div`
  display: flex;
  display-flex: column;
  border: 1px solid #e1e1e1;
  padding: 1rem 3rem;
  div {
    font-size: 2rem;
  }
  p {
    margin: 0 5px;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const DetallesCarta = ({ carta }) => {
  const {
    id,
    comentarios,
    creado,
    descripcion,
    nombre,
    urlimagen,
    votos
  } = carta;

  return (
    <Carta>
      <DescripcionCarta>
        <div>
          <Imagen src={urlimagen} />
        </div>

        <div>
          <Link href="/cartas/[id]" as={`/cartas/${id}`}>
            <Titulo>{nombre}</Titulo>
          </Link>
          <TextoDescripcion
            css={css`
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            `}
          >
            {descripcion}
          </TextoDescripcion>
          <Comentarios>
            <div>
              <img src="/static/img/comentario.png" />
              <p>{comentarios.length} Comentarios</p>
            </div>
          </Comentarios>
          <p>
            Publicado hace:{" "}
            {formatDistanceToNow(new Date(creado), { locale: es })}{" "}
          </p>
        </div>
      </DescripcionCarta>

      <Votos>
        <div> 👏</div>
        <p>{votos}</p>
      </Votos>
    </Carta>
  );
};

export default DetallesCarta;
