import React, { useState } from "react";
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


// useState function to set the default render to home
export default function PortfolioContainer() {

    // styles

    const styles={
        pageStyles : {
            display: "flex",
        }
    }
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.pageStyles}>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
