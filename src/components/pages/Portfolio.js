import zenten from "../../images/zenten.png";
import weather from "../../images/weather.png";
import generator from "../../images/generator.png";
import scheduler from "../../images/scheduler.png";
import devise from "../../images/devise.png";
import tech from "../../images/tech.png";

export default function Portfolio() {
  return (
    <main className="mainPortfolio">
      <div className="portfolioContainer">
        <div className="portfolioOne">
          <a
            href="https://juliakhdavis.github.io/zenTen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImage"
              src={zenten}
              alt="code refactor word mashup"
            />
          </a>

          <a
            href="https://iluton.github.io/Password-Generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImage"
              src={generator}
              alt="password input box with binary code behind"
            />
          </a>
        </div>
        <div className="portfolioTwo">
          <a
            href="https://iluton.github.io/Work-Day-Scheduler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImage"
              src={scheduler}
              alt="open day planner showing monday and tuesday"
            />
          </a>

          <a
            href="https://iluton.github.io/Weather-Dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImage"
              src={weather}
              alt="weather dashboard diplaying weather"
            />
          </a>

          <a
            href="https://devisehub.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="projectImage" src={devise} alt="react logo" />
          </a>
        </div>
        <div className="portfolioThree">
          <a
            href="https://thawing-fortress-77603.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImage"
              src={tech}
              alt="the word blog coming of of computer hardware"
            />
          </a>
          <a
            href="https://thawing-fortress-77603.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImage"
              src={tech}
              alt="the word blog coming of of computer hardware"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
