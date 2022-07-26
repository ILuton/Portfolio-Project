import zenten from "../../images/zenten.png";
import weather from "../../images/weather.png";
import generator from "../../images/generator.png";
import scheduler from "../../images/scheduler.png";
import devise from "../../images/devise.png";
import tech from "../../images/tech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  const styles = {
    containerStyle: {
      height: "700px",
      width: "85%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    projectTitleStyle: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "10px",
    },
  };
  return (
    <main style={styles.containerStyle}>
      <section className="project-one">
        <div className="project-one-container" style={styles.projectTitleStyle}>
          <h2 className="projectTitle">Zen Ten</h2>
          <a
            href="https://github.com/juliakhdavis/zenTen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
          </a>
        </div>
        <div>
          <a
            href="https://juliakhdavis.github.io/zenTen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={zenten} alt="code refactor word mashup" />
          </a>
        </div>
      </section>

      <section className="project-two">
        <div className="project-two-container" style={styles.projectTitleStyle}>
          <h2 className="projectTitle">
            Password-Generator
          </h2>
          <a
            href="https://github.com/ILuton/Password-Generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
          </a>
        </div>
        <div>
          <a
            href="https://iluton.github.io/Password-Generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={generator}
              alt="password input box with binary code behind"
            />
          </a>
        </div>
      </section>

      <section className="project-three">
        <div className="project-three-container"style={styles.projectTitleStyle}>
          <h2 className="projectTitle">
            Daily Planner
          </h2>
          <a
            href="https://github.com/ILuton/Work-Day-Scheduler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
          </a>
        </div>
        <div>

          <a
            href="https://iluton.github.io/Work-Day-Scheduler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={scheduler}
              alt="open day planner showing monday and tuesday"
            />
          </a>
        </div>
      </section>

      <section className="project-four">
        <div className="project-four-container" style={styles.projectTitleStyle}>
          <h2 className="projectTitle">
            Weather-Dashboard
          </h2>
          <a
            href="https://github.com/ILuton/Weather-Dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
          </a>
        </div>
        <div>
          

          <a
            href="https://iluton.github.io/Weather-Dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weather} alt="weather dashboard diplaying weather" />
          </a>
        </div>
      </section>

      <section className="project-five">
        <div className="project-five-container" style={styles.projectTitleStyle}>
          <h2 className="projectTitle">
            DEVise
          </h2>
          <a
            href="https://github.com/OwenMG/DEVise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
          </a>
        </div>
        <div>

          <a
            href="https://devisehub.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={devise} alt="react logo" />
          </a>
        </div>
      </section>

      <section className="project-six">
        <div className="project-six-container" style={styles.projectTitleStyle}>
          <h2 className="projectTitle">
            Tech Blog
          </h2>
          <a
            href="https://github.com/ILuton/Tech-Blog-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
          </a>
        </div>
        <div>

          <a
            href="https://thawing-fortress-77603.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tech}
              alt="the word blog coming of of computer hardware"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
