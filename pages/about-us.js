import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";

import { TwitterIcon, EmailIcon, EmailShareButton } from "react-share";

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
            <text
              className="about-us"
              css={css`
                text-align: justify;
                text-justify: inter-character;
              `}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus Page
            </text>
          </div>
          <div>
            <text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus Page
            </text>
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
            <EmailShareButton body="body" className="network__share-button">
              <EmailIcon size={"5rem"} round />
            </EmailShareButton>
          </Network>
        </CNetwork>
      </article>
    </Layout>
  );
};

export default AboutUs;
