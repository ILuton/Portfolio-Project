import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const styles = {
    containerStyle: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      marginBottom: "3rem"
    },
    linkedInStyle: {
      color: "#0b65c2",
      fontSize: "15vw",
      marginLeft: "2rem"
    },
    gitHubStyle: {
      color: "black",
      fontSize: "15vw",
      marginRight: "2rem"
    },
    linksDiv: {
      marginTop: "1rem",
      display: "flex",
      justifyContent: "center",
      width: "100%",

    },
    emailStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.containerStyle}>
      <div style={styles.emailStyle}>
        <p
          style={{ marginTop: ".5rem", marginBottom: ".2rem", fontSize: "5vw" }}
        >
          Email:
        </p>
        <p
          style={{ marginTop: ".1rem", marginBottom: ".5rem", fontSize: "5vw" }}
        >
          isaacdluton@gmail.com
        </p>
      </div>
      <div style={styles.linksDiv}>
        <a
          className="socialLinks"
          href="https://github.com/ILuton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            style={styles.gitHubStyle}
            icon={faGithub}
            size="3x"
          ></FontAwesomeIcon>
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
    </div>
  );
};

export default Contact;
