// App.js
import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LogoAnimation from "./Pages/LogoAnimation";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";

function App() {
  const showHomePageStored = sessionStorage.getItem("showHomePage") === "true";
  const [showHomePage, setShowHomePage] = useState(showHomePageStored);

  const handleAnimationFinish = () => {
    // Set the showHomePage flag in sessionStorage
    sessionStorage.setItem("showHomePage", "true");
    setShowHomePage(true);
  };

  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          fontFamily: "Montserrat, sans-serif",
          
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {showHomePage ? (
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<Contact />} path="/contact-us" />
            <Route element={<Services />} path="/services" />
            <Route element={<About />} path="/about-us" />
          </Routes>
        ) : (
          <LogoAnimation onFinish={handleAnimationFinish} />
        )}
      </Router>
    </ChakraProvider>
  );
}

export default App;
