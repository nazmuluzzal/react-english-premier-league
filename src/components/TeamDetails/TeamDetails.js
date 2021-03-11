import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
import "./TeamDetails.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import found from "../../Icon/found.png";
import flag from "../../Icon/flag.png";
import football from "../../Icon/football.png";
import genderSign from "../../Icon/male-gender-sign.png";
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";

//
//
const TeamDetails = () => {
  let { teamId } = useParams();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [teamId]);
  const {
    strTeam,
    intFormedYear,
    strSport,
    strCountry,
    strGender,
    strStadiumDescription,
    strDescriptionEN,
  } = team;
  //
  let gender;
  if (strGender === "Male") {
    gender = <img src={male} alt="" />;
  } else {
    gender = <img src={female} alt="" />;
  }

  return (
    <div>
      <Header team={team}></Header>
      <div className="team-container">
        <div className="container-fluid team-info-div">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 ">
              <div className="icon-img">
                <h1>{strTeam}</h1>
                <h5>
                  <img src={found} alt="" /> Founded: {intFormedYear}
                </h5>
                <h5>
                  <img src={flag} alt="" /> Country: {strCountry}
                </h5>
                <h5>
                  <img src={football} alt="" />
                  Sport Type: {strSport}
                </h5>
                <h5>
                  <img src={genderSign} alt="" /> Gender: {strGender}
                </h5>
              </div>
            </div>
            {/* Gender Image */}
            <div className="col-md-6 gender-img">{gender}</div>
          </div>
        </div>
        <div className="team-description">
          <p>{strStadiumDescription}</p>
          <p>{strDescriptionEN}</p>
        </div>
        <Footer team={team}></Footer>
      </div>
    </div>
  );
};

export default TeamDetails;
