import zenten from "../../images/zenten.png";
import weather from "../../images/weather.png";
import generator from "../../images/generator.png";
import scheduler from "../../images/scheduler.png";

export default function Portfolio() {
  const styles = {
    containerStyle: {
      height: "700px",
      width: "85%",
      display: 'flex',
      flexWrap: "wrap"

    },
  };
  return (
    <main style={styles.containerStyle}>
      <section className="project-one">
        <div className="project-one-container">
          <h3 className="projectTitle">Zen Ten</h3>
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
        <div className="project-two-container">
          <h3 className="projectTitle">Password-Generator</h3>

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
        <div className="project-three-container">
          <h3 className="projectTitle">Daily Planner</h3>

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
        <div className="project-four-container">
          <h3 className="projectTitle">Weather-Dashboard</h3>

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
        <div className="project-five-container">
          <h3 className="projectTitle">DEVise</h3>

          <a
            href="https://devisehub.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/devise_login.png" alt="react logo" />
          </a>
        </div>
      </section>

      <section className="project-six">
        <div className="project-six-container">
          <h3 className="projectTitle">Tech Blog</h3>

          <a
            href="https://thawing-fortress-77603.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/tech.png"
              alt="the word blog coming of of computer hardware"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
