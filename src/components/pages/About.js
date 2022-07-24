import React from "react";
import aboutBackground from "../../images/aboutBackground.jpeg";

export default function About() {
  const styles = {
    containerStyle: {
      height: "100vh",
      width: "85%",
      backgroundImage: `url(${aboutBackground})`,
      backgroundSize: "cover",
      borderLeft: "2px solid black",
    },
    fontStyle: {
      margin: "150px",
      fontSize: "25px",
    },
  };

  return (
    <section style={styles.containerStyle}>
      <div style={styles.fontStyle}>
        <h1>Hello! My name is Isaac.</h1>
        <p>
          I am a Seattle based full stack Web Developer. After graduating from
          Washington State University, I launched my career in healthcare -
          doubling as a Personal Trainer and Physical Therapy Tech. Soon, I
          discovered a passion in building web pages and took a leap to learn
          more with entry into the University of Washington Coding Bootcamp. I
          am excited to continue broadening my knowledge and skillset to build
          and design web applications.
        </p>

        <p>
          <strong>Hobbies: </strong>You can typically find me lifting weights at
          the gym, enjoying the great oudoors of the PNW, or trying my hand at
          making pizza
        </p>
        <p>
          <strong>Dream job: </strong>Running a dog rescue farm and being a
          front-end web developer
        </p>
      </div>
    </section>
  );
}
