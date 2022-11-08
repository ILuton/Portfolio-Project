import zenten from "../../images/zenten.jpeg";
import weather from "../../images/weather.jpeg";
import devise from "../../images/devise.jpeg";
import tech from "../../images/tech.jpeg";
import stop from "../../images/stop.jpeg";
import projects from "../../projectsModel";

import ReactCardFlip from "react-card-flip";
import React from "react";

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const srcCheck = (name) => {
    if (name === "zenten") {
      return zenten;
    } else if (name === "weather") {
      return weather;
    } else if (name === "devise") {
      return devise;
    } else if (name === "tech") {
      return tech;
    } else if (name === "stop") {
      return stop;
    } else {
      return "error";
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onMouseEnter={() => setIsFlipped((prev) => !prev)}>
        <img
          className="projectImage"
          src={srcCheck(project.name)}
          alt={project.name}
        ></img>
      </div>
      <div
        className="projectInfo"
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
      >
        <h1 className="projectTitle">{project.title}</h1>
        <p className="description">{project.description}</p>
        <div className="techUsed">
          <h3>Technologies Used</h3>
        </div>
        <ul className="techList">
          {project.techUsed.map((item, i) => (
            <li key={"tech_" + i}>{item}</li>
          ))}
        </ul>
        <div className="cardLinks">
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            Project Live Link
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            Project Github Link
          </a>
        </div>
      </div>
    </ReactCardFlip>
  );
};

const Portfolio = () => {
  return (
    <main className="mainPortfolio">
      <div className="portfolioContainer">
        {projects.map((project, index) => (
          <Card project={project} key={`project-${index}`} />
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
