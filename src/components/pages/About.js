import sunrise from "../../video/sunrise.mp4";

export default function About() {
  const styles = {
    containerStyle: {
      height: "87vh",
      width: "100%",
      backgroundColor: "black",
      zIndex: "-2",
      backgroundSize: "cover",
      overflow: "auto",
    },
    fontStyle: {
      margin: "2rem",
      fontSize: "1.5vw",
    },
    videoDiv: {
      position: "fixed",
      zIndex: "-1",
      width: "100%",
      height: "100%",
    },
    videoStyle: {
      objectFit: "cover",
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0",
    },
  };

  return (
    <section className="aboutCon" style={styles.containerStyle}>
      <div style={styles.videoDiv}>
        <video
          style={styles.videoStyle}
          src={sunrise}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div style={styles.fontStyle}>
        <p className="aboutText">
          I am a Seattle-based Full Stack Web Developer proficient in
          JavaScript, HTML, CSS, React, MySQL, MongoDB. After graduating from
          Washington State University, I started my career in healthcare -
          doubling as a Personal Trainer and Physical Therapy Tech. Although I
          enjoyed working with people, I discovered my true passion for software
          development after working on a webpage design project. I made the leap
          into the tech world and started learning coding skills on my own. I
          furthered my education through completion of the rigorous University
          of Washington Coding Bootcamp. I am excited to launch my career in
          tech while contributing to a web development team.
        </p>

        <p className="aboutText">
          You can typically find me lifting weights at the gym, enjoying the
          great outdoors of the PNW, or trying my hand at making sourdough pizza.
        </p>
      </div>
    </section>
  );
}
