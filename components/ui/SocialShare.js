import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

const Network = styled.div`
  vertical-align: top;
  display: inline-block;
  text-align: center;
  margin: 1.5rem 0.5rem 1.5rem;
`;

const CNetwork = styled.section`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;
export default class SocialShare extends Component {
  static propTypes = {
    channelName: PropTypes.string,
    channelid: PropTypes.string.isRequired,
    shareImage: PropTypes.string
  };

  static defaultProps = {
    channelName: "",
    channelid: "",
    shareImage: ""
  };

  render() {
    const { channelId, shareImage } = this.props;

    const selectedPath = channelId;
    //solojuntos.com/productos/eeHnCQ93X0AXqUfm5FUc
    const shareLink = `https://solojuntos.com/cartas/${selectedPath}`;
    const title = `Quiero compartir una carta contigo`;

    return (
      <CNetwork>
        <Network>
          <FacebookShareButton
            url={shareLink}
            quote={title}
            className="network__share-button"
          >
            <FacebookIcon
              size={"5rem"} // You can use rem value isntead of numbers
              round
            />
          </FacebookShareButton>
        </Network>

        <Network>
          <TwitterShareButton
            url={shareLink}
            title={title}
            className="network__share-button"
          >
            <TwitterIcon size={"5rem"} round />
          </TwitterShareButton>

          <div className="network__share-count">&nbsp;</div>
        </Network>

        <Network>
          <WhatsappShareButton
            url={shareLink}
            title={title}
            separator=":: "
            className="network__share-button"
          >
            <WhatsappIcon size={"5rem"} round />
          </WhatsappShareButton>

          <div className="network__share-count">&nbsp;</div>
        </Network>

        <Network>
          <EmailShareButton
            url={shareLink}
            subject={title}
            body="body"
            className="network__share-button"
          >
            <EmailIcon size={"5rem"} round />
          </EmailShareButton>
        </Network>
      </CNetwork>
    );
  }
}
