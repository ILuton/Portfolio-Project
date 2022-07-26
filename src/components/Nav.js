import Devicons from "./Devicons";
import NavProfile from "./NavProfile";

function Nav({ currentPage, handlePageChange }) {
  const styles = {
    navStyles: {
      width: "15%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#666666",
    },
    navItemStyle: {
      fontSize: "35px",
      color: "white",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px",
      marginBottom: "80px",
    },
  };

  return (
    <header style={styles.navStyles}>
      <NavProfile />
      <ul className="nav nav-tabs" style={styles.navItemStyle}>
        <li className="nav-item">
          <a href="#about" onClick={() => handlePageChange("About")}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={() => handlePageChange("Contact")}>Contact</a>
        </li>
      </ul>
      <Devicons></Devicons>
    </header>
  );
}

export default Nav;
