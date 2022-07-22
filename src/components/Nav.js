import React from 'react';
import Devicons from './Devicons';
import NavProfile from "./NavProfile";

function Nav({ currentPage, handlePageChange }) {

    const styles = {
        navStyles: {
        width: "15%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#666666",
    }, navItemStyle: {

      fontSize: "35px",
      color: "white",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px"
    }}
    
  return (
    <header style={styles.navStyles}>
      <NavProfile />
    <ul className="nav nav-tabs" style={styles.navItemStyle}>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for- terinary 

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    <Devicons></Devicons>
    </header>
  );
}

export default Nav;
