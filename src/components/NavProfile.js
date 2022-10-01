import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilepic from "../images/profilepic.jpg";

const NavProfile = () => {
  const styles = {
    imgStyle: {
      width: "138px",
      height: "245px",
      borderRadius: "10px",
      marginTop: ".05rem",
      border: "2px solid black",
    },
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    linkedInStyle: {
      color: "#0b65c2",
    },
    gitHubStyle: {
      color: "black",
    },
    linksDiv: {
      marginTop: ".6rem",
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
    emailStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.containerStyle}>
      <img
        src={profilepic}
        alt="Portfolio author Isaac Luton."
        style={styles.imgStyle}
      ></img>
      <div style={styles.emailStyle}>
        <p style={{marginTop: ".1rem", marginBottom: ".2rem"}}>Email:</p>
        <p style={{marginTop: ".1rem", marginBottom: ".2rem" }}>isaacdluton@gmail.com</p>
      </div>
      <div style={styles.linksDiv}>
        <a
          className="socialLinks"
          href="https://github.com/ILuton"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.gitHubStyle}
        >
          <FontAwesomeIcon style={{marginRight: "1.5rem"}} icon={faGithub} size="3x"></FontAwesomeIcon>
        </a>
        <a
          className="socialLinks"
          href="http://www.linkedin.com/in/ILuton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            style={styles.linkedInStyle}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default NavProfile;
