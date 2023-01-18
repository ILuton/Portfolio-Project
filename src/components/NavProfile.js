
import profilepic from "../images/profilepic.jpg";

const NavProfile = () => {
  const styles = {
    imgStyle: {
      width: "80%",
      height: "auto",
      borderRadius: "2rem",
      border: ".1rem solid black",
      marginTop: "2rem"
    },
    containerStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      height: "100%",
    },
  };
  return (
    <div style={styles.containerStyle}>
      <img
        src={profilepic}
        alt="Portfolio author Isaac Luton."
        style={styles.imgStyle}
      ></img>
    </div>
  );
};

export default NavProfile;
