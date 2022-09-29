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
      fontSize: "30px",
      color: "white",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px", 
    marginBottom: "5px"},
  };

  return (
    <header style={styles.navStyles}>
      <NavProfile />
      <ul className="nav nav-tabs" style={styles.navItemStyle}>
        <li className="nav-item">
          <a className="navLink" href="#about" onClick={() => handlePageChange("About")}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="navLink" href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="navLink"href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
      </ul>
      <Devicons></Devicons>
    </header>
  );
}

export default Nav;
