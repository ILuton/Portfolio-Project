
import profilepic from "../images/profilepic.jpg";

const NavProfile = () => {
  const styles = {
    imgStyle: {
      width: "4vw",
      height: "7vw",
      borderRadius: "1rem",
      border: ".1rem solid black",
      marginLeft: "1rem"
    },
    containerStyle: {
      display: "flex",
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
