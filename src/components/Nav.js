import NavProfile from "./NavProfile";
import Contact from "./Contact";

function Nav() {
  const styles = {
    navStyles: {
      width: "100%",
      height: "80%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#999999",
      alignItems: "center",
    },
    navItemStyle: {
      fontSize: "7vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      justifySelf: "end",
      height: "20%"
    },
    imageContactStyles: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "80%",
    }
  };

  return (
    <header className= "navHeader" style={styles.navStyles}>
      <div style={ styles.imageContactStyles}>
      <NavProfile />
      <Contact></Contact>
      </div>
      <div style={styles.navItemStyle}>
        <a
          className="navLink"
          href="#about"
        >
          <strong>About</strong>
        </a>
        <a
          className="navLink"
          href="#portfolio"
        >
          <strong>Projects</strong>
        </a>
        <a
          className="navLink"
          href="#resume"
        >
          <strong>Resume</strong>
        </a>
      </div>
    </header>
  );
}

export default Nav;
