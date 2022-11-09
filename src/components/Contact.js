import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const styles = {
    linkedInStyle: {
      color: "#0b65c2",
      fontSize: "2.5vw",
    },
    gitHubStyle: {
      color: "black",
    },
    linksDiv: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginTop: "3rem"
    },
    emailStyle: {
      display: "flex",
      alignItems: "center",
    },
  };
  return (
    <div>
      <div style={styles.linksDiv}>
        <a
          className="socialLinks"
          href="https://github.com/ILuton"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.gitHubStyle}
        >
          <FontAwesomeIcon
            style={{ marginRight: "1rem", fontSize: "2.5vw" }}
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
      <div style={styles.emailStyle}>
        <p
          style={{fontSize: "1vw", marginRight: "1rem" }}
        >
          <strong>isaacdluton@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Contact;
