import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const styles = {
      linkedInStyle: {
        color: "#0b65c2",
        fontSize:"2.5vw"
      },
      gitHubStyle: {
        color: "black",
      },
      linksDiv: {
        marginTop: ".3rem",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginBottom: "1rem"
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
          <p style={{marginTop: ".5rem", marginBottom: ".2rem", fontSize:"1vw"}}>Email:</p>
          <p style={{marginTop: ".1rem", marginBottom: ".2rem", fontSize:"1vw"}}>isaacdluton@gmail.com</p>
        </div>
        <div style={styles.linksDiv}>
          <a
            className="socialLinks"
            href="https://github.com/ILuton"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.gitHubStyle}
          >
            <FontAwesomeIcon style={{marginRight: "1.5rem", fontSize:"2.5vw"}} icon={faGithub} size="3x"></FontAwesomeIcon>
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