import zenten from "../../images/zenten.jpeg";
import weather from "../../images/weather.jpeg";
import devise from "../../images/devise.jpeg";
import tech from "../../images/tech.jpeg";
import stop from "../../images/stop.jpeg";

export default function Portfolio() {
  return (
    <main className="mainPortfolio">
      <div className="portfolioContainer">
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
          href="https://devisehub.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="projectImage" src={devise} alt="react logo" />
        </a>

        <a
          href="https://support-pandemic-obliteration.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="projectImage" src={stop} alt="stop website" />
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
      </div>
    </main>
  );
}
