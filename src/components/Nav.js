import NavProfile from "./NavProfile";
import Contact from "./Contact";

function Nav({ currentPage, handlePageChange }) {
  const styles = {
    navStyles: {
      width: "13%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#d9dddc",
      justifyContent: "space-around",
      alignItems: "center",
      overflow: "auto"
    },
    navItemStyle: {
      fontSize: "1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return (
    <header className= "navHeader" style={styles.navStyles}>
      <NavProfile />
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
      <h3 className="skills">Contact</h3>
      <Contact></Contact>
    </header>
  );
}

export default Nav;
