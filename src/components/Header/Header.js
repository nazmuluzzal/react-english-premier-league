import React from "react";
import "./Header.css";
import bananerImg from "../../Photo/epl-img-bg2.png";

const Header = (props) => {
  const { strTeamBadge } = props.team;
  let logo;
  if (strTeamBadge === undefined) {
    logo = <h2>English Premier League</h2>;
  } else {
    logo = <img src={strTeamBadge} alt="" />;
  }

  return (
    <div className="header-container">
      <img src={bananerImg} alt="" />
      <div className="center">{logo}</div>
    </div>
  );
};

export default Header;
