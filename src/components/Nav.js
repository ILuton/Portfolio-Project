import NavProfile from "./NavProfile";
import Contact from "./Contact";

function Nav({ currentPage, handlePageChange }) {
  const styles = {
    navStyles: {
      width: "100%",
      height: "13vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    navItemStyle: {
      fontSize: "1.5vw",
      display: "flex",
      justifyContent: "space-between",
      width: "23%",
      marginTop: "5rem",
      marginRight: "10rem"
    },
  };

  return (
    <header className="navHeader" style={styles.navStyles}>
      <div className="imageName">
        <NavProfile />
        <h1 style={{marginLeft: "1rem", marginTop: "6rem", fontSize: "2.5rem" }}>Isaac</h1>
        <h1 style={{marginLeft: ".5rem", marginTop: "6rem", fontSize: "2.5em"}}>Luton</h1>
      </div>
      <div style={styles.navItemStyle}>
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
          Projects
        </a>
        <a
          className="navLink"
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </a>
      </div>
      <Contact></Contact>
    </header>
  );
}

export default Nav;
