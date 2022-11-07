import NavProfile from "./NavProfile";
import Contact from "./Contact";

function Nav({ currentPage, handlePageChange }) {
  const styles = {
    navStyles: {
      width: "13%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#999999",
      alignItems: "center",
    },
    navItemStyle: {
      fontSize: "2.5vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "1.5rem"
    },
  };

  return (
    <header className= "navHeader" style={styles.navStyles}>
      <div>
      <NavProfile />
      <Contact></Contact>
      </div>
      <div style={styles.navItemStyle}>
        <a
          className="navLink"
          href="#about"
          onClick={() => handlePageChange("About")}
        >
          <strong>About</strong>
        </a>
        <a
          className="navLink"
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          <strong>Projects</strong>
        </a>
        <a
          className="navLink"
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          <strong>Resume</strong>
        </a>
      </div>
    </header>
  );
}

export default Nav;
