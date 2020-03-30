import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";

import { TwitterIcon, EmailIcon } from "react-share";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const AboutUs = () => {
  const CNetwork = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 8px 0 15px 0;
  `;
  const Network = styled.div`
    vertical-align: top;
    display: inline-block;
    text-align: center;
    margin: 1.5rem 0.5rem 1.5rem;
  `;

  return (
    <Layout>
      <article className="contenedor">
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
            margin-bottom: 5rem;
          `}
        >
          Sobre nosotros
        </h1>
        <div className="texto">
          <div>
            <p
              className="about-us"
              css={css`
                text-align: justify;
                text-justify: inter-character;
              `}
            >
              ¡Hola! Esta iniciativa nace a raíz de la petición de un médico de
              Pamplona para que la gente enviase mensajes a los enfermos por
              COVID-19 del CHN. La intención de esta plataforma es hacer que
              todos ellos reciban esos mensajes en forma de carta. Pero también
              queremos que esta iniciativa se haga extensiva a todos aquellos
              que se sientan solos, desanimados, tristes o ansiosos, en sus
              casas o allí donde estén pasando esta cuarentena. Para los
              profesionales de la salud, para las fuerzas de seguridad de
              cualquier ámbito, para cualquier tipo de profesional, para el que
              le lleva la compra al vecino o un largo etcétera de pequeños
              gestos diarios. Hagamos que todos puedan recibir el aliento de los
              demás que tanto necesitan. <br />
              <br />
              Creemos que todos esos bonitos textos de las redes sociales se
              pierden entre la multitud de mensajes y esta es una manera de
              tenerlos siempre presentes. Nos gustaría además, que todos estos
              mensajes, fuesen de ánimo. Por lo que entendemos que deben estar
              libres de comentarios políticos, sexistas, racistas, homófobos…
              <br />
              <br />
              Cabe decir que somos desarrolladores juniors y que esta iniciativa
              también nos sirve tanto de aprendizaje como de exposición
              profesional. No buscamos nada llamativo estéticamente con ella,
              sino que cumpla la función para la que ha sido desarrollada.
              Esperamos que os guste. <br />
              <br />
              Si alguien quiere ponerse en contacto con nosotros, puede hacerlo
              a través de los botones que hay al final de este texto. El de
              twitter que te dirige a nuestro perfil y el otro al mail. Un
              saludo.
            </p>
          </div>
        </div>
        <CNetwork>
          <Network>
            <a
              href="https://twitter.com/SolojuntosC"
              class="twitter-follow-button"
              data-show-count="false"
            >
              <TwitterIcon size={"5rem"} round />
            </a>
          </Network>
          <Network>
            <Mailto
              email="solojuntos@post.com"
              subject="Info"
              body="Escribenos lo que quieras"
            >
              <EmailIcon size={"5rem"} round />
            </Mailto>
          </Network>
        </CNetwork>
      </article>
    </Layout>
  );
};

export default AboutUs;
