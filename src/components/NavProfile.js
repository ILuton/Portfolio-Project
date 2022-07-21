import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import profilepic from "../images/profilepic.jpg";

const NavProfile = () => {
  const styles = {
    imgStyle: {
      width: "120px",
      height: "213px",
      marginTop: "10px",
      borderRadius: "10px",
    },
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    githubStyle: {
      color: "red",
    },
  };
  return (
    <div style={styles.containerStyle}>
      <img
        src={profilepic}
        alt="Portfolio author Isaac Luton."
        style={styles.imgStyle}
      ></img>
      <a href="https://github.com/ILuton" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
      </a>
      <a href="http://www.linkedin.com/in/ILuton" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          style={styles.githubStyle}
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default NavProfile;
