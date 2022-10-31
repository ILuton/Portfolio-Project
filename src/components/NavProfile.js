
import profilepic from "../images/profilepic.jpg";

const NavProfile = () => {
  const styles = {
    imgStyle: {
      width: "10vw",
      height: "17vw",
      borderRadius: "1rem",
      border: ".1rem solid black",
      marginTop: ".5rem"
    },
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "70%"
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
