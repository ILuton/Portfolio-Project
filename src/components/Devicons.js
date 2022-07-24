import React from "react";

const Devicons = () => {

    const styles = {
        devStyles: {
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "end",
        }
    }
  return (
    <div style={styles.devStyles}>
      <i className="devicon-javascript-plain colored"></i>

      <i className="devicon-react-original-wordmark colored"></i>

      <i className="devicon-mongodb-plain-wordmark colored"></i>

      <i className="devicon-express-original-wordmark"></i>

      <i className="devicon-nodejs-plain-wordmark colored"></i>

      <i className="devicon-css3-plain-wordmark colored"></i>

      <i className="devicon-html5-plain-wordmark colored"></i>

      <i className="devicon-handlebars-plain-wordmark colored"></i>

      <i className="devicon-graphql-plain-wordmark colored"></i>
    </div>
  );
};

export default Devicons;
