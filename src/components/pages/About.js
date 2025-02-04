
export default function About() {
  const styles = {
    containerStyle: {
      height: "100vh",
      width: "100%",
      backgroundColor: "black",
      zIndex: "-2",
      backgroundSize: "cover",
      overflow: "auto",
    },
    fontStyle: {
      margin: "3rem",
      fontSize: "1.5vw"
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
      left: "0"

    }

  };

  return (
    <section className="aboutCon" style={styles.containerStyle}>
      <div style={styles.fontStyle}>
        <h1 className="aboutText">Hi! My name is Isaac.</h1>
        <p className="aboutText">
          I am a Seattle-based full stack Web Developer. After graduating from
          Washington State University, I launched my career in healthcare -
          doubling as a Personal Trainer and Physical Therapy Tech. I discovered
          a passion for building and designing web pages and took the leap into
          the tech world. I started learning on my own and continued through the
          University of Washington Coding Bootcamp. I am excited to expand my
          skillset while contributing to a web development team.
        </p>

        <p className="aboutText">
          You can typically find me lifting weights at the gym, enjoying the
          great oudoors of the PNW, or trying my hand at making sourdough pizza.
        </p>
      </div>
    </section>
  );
}
