
import profilepic from "../images/profilepic.jpg";

const NavProfile = () => {
  const styles = {
    imgStyle: {
      width: "6vw",
      height: "10vw",
      borderRadius: "1rem",
      border: ".1rem solid black",
      marginLeft: "1rem",
      maxHeight: "110px",
      maxWidth: "70px"
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
