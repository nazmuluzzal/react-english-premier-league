import React from "react";
import "./Header.css";

const Header = (props) => {
  const { haslogo, hasbanner, banner, dynamicBanner, logo } = props;
  const bannerStyle = {
    backgroundImage: hasbanner ? `url(${dynamicBanner})` : `url(${banner})`,
  };

  return (
    <div style={bannerStyle} className="top-banner">
      <div className="logo">
        {haslogo ? <img src={logo} alt="" /> : <h2>English Premier League</h2>}
      </div>
    </div>
  );
};

export default Header;
