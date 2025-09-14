import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer"; // Make sure this line is here
import { ThemeProvider } from "./theme";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const handleNav = (navPage) => {
    setPage(navPage);
  };

  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar onNav={handleNav} />
        <main className="content-wrapper">
          {page === "home" && <Home />}
          {page === "projects" && <Portfolio />}
          {page === "contact" && <Contact />}
        </main>
        <Footer /> {/* And this line is here */}
      </div>
    </ThemeProvider>
  );
}

export default App;