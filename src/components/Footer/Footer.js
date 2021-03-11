import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = (props) => {
  const { strTwitter, strFacebook, strYoutube } = props.team;
  return (
    <div className="footer">
      <a href={`https://${strTwitter}`}>
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a href={`https://${strFacebook}`}>
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href={`https://${strYoutube}`}>
        <FontAwesomeIcon icon={faYoutube} size="3x" />
      </a>
    </div>
  );
};

export default Footer;
