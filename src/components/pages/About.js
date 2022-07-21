import React from 'react';
import aboutBackground  from "../../images/aboutBackground.jpeg";


export default function About() {

  const styles = {
    containerStyle: {
      height: "100vh",
      width: "85%",
      backgroundImage: `url(${aboutBackground})`,
      backgroundSize: "cover",
    }
  }
  
  return (
    <section style={styles.containerStyle}>
      <h1>About Page</h1>
      <div>
        <p>
          <span>Hello.</span> My name is Isaac. I am currently on my way to becoming a Web
          Developer. After graduating from Washington State University, I
          launched my career in healthcare - doubling as a Personal Trainer and
          Physical Therapy Tech. Soon, I discovered a passion in building web
          pages and took a leap to learn more with entry into the University of
          Washington Coding Bootcamp. I am excited to continue broadening my
          knowledge and skillset to build web design products.
        </p>
        <ul>
          <li><strong>Born: </strong>Seattle, WA</li>
          <li>
            <strong>Hobbies: </strong>You can typically find me lifting weights
            at the gym or trying my hand at making pizza
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
