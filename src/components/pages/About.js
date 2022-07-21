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
      fontFamily: "Acme, sans-serif",
      margin: "80px",
      fontSize: "25px"
    },
  };

  return (
    <section style={styles.containerStyle}>
      <div style={styles.fontStyle}>
        <p>
          Hello! My name is Isaac. I am a Seattle based full stack Web Developer. After graduating from Washington State
          University, I launched my career in healthcare - doubling as a
          Personal Trainer and Physical Therapy Tech. Soon, I discovered a
          passion in building web pages and took a leap to learn more with entry
          into the University of Washington Coding Bootcamp. I am excited to
          continue broadening my knowledge and skillset to build and design web applications. 
        </p>
        <ul>
          <li>
            <strong>Hobbies: </strong>You can typically find me lifting weights
            at the gym, enjoying the great oudoors of the PNW, or trying my hand at making pizza
          </li>
          <li>
            <strong>Dream job: </strong>Running a dog rescue farm and being a
            front-end web developer
          </li>
        </ul>
      </div>
    </section>
  );
}
