import React from "react";
import Button from "@material-ui/core/Button";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Team = (props) => {
  const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
  const history = useHistory();
  const handleOnclick = (teamId) => {
    const url = `/team/${teamId}`;
    history.push(url);
  };
  return (
    <div>
      <div className="each-team-div">
        <img src={strTeamBadge} alt="team-badge" />
        <h2>{strTeam}</h2>
        <h4>Sports Type: {strSport}</h4>
        <Button
          onClick={() => handleOnclick(idTeam)}
          variant="contained"
          size="large"
          color="primary"
        >
          Explore <FontAwesomeIcon icon={faArrowCircleRight} />
        </Button>
      </div>
    </div>
  );
};

export default Team;
