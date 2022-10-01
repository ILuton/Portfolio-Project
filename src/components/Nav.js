import Devicons from "./Devicons";
import NavProfile from "./NavProfile";

function Nav({ currentPage, handlePageChange }) {
  const styles = {
    navStyles: {
      width: "18%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#666666",
      justifyContent: "space-around",
      alignItems: "center",
      borderRight: ".2rem solid black",
    },
    navItemStyle: {
      fontSize: "2.2rem",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "2.5rem",
      marginTop: ".3rem"
    },
  };

  return (
    <header style={styles.navStyles}>
      <NavProfile />
      <p className="nav nav-tabs" style={styles.navItemStyle}>
        <a
          className="navLink"
          href="#about"
          onClick={() => handlePageChange("About")}
        >
          About
        </a>
        <a
          className="navLink"
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </a>
        <a
          className="navLink"
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </a>
      </p>
      <h3 className="skills">Skills</h3>
      <Devicons></Devicons>
    </header>
  );
}

export default Nav;
