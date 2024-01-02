import React, { useState, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import logoConstruction from "../Assets/Png/logoConstruction.svg";
import yoursassistance from "../Assets/Svg/yoursassistance.svg";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "@chakra-ui/react";

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const pulsate = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const LogoAnimation = ({ onFinish }) => {
  const [showText, setShowText] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showText) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showText, onFinish]);

  return (
    <Box>
      {isMobile ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          backgroundColor="white"
        >
          {showText ? (
            <Flex justifyContent="center" alignItems="center">
              <Image
                src={yoursassistance} // Path to the second logo
                alt="Logo"
                width="30%" // Adjust the size as needed
              />
              <TypeAnimation
                sequence={["Yoursassistance"]}
                wrapper="span"
                speed={30}
                style={{
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize: "28px",
                  color: "#0298DA",
                }}
                repeat={0}
              />
            </Flex>
          ) : (
            <Image
              src={logoConstruction} // Path to the first logo
              alt="Logo"
              width="40%" // Adjust the size as needed
              animation={`${fadeInOut} 1.5s ease-in-out, ${pulsate} 1.5s ease-in-out infinite`}
            />
          )}
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          backgroundColor="white"
        >
          {showText ? (
            <Flex justifyContent="center" alignItems="center">
              <Image
                src={yoursassistance} // Path to the second logo
                alt="Logo"
                width="20%" // Adjust the size as needed
              />
              <TypeAnimation
                sequence={["Yoursassistance"]}
                wrapper="span"
                speed={30}
                style={{
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize: "128px",
                  color: "#0298DA",
                }}
                repeat={0}
              />
            </Flex>
          ) : (
            <Image
              src={logoConstruction} // Path to the first logo
              alt="Logo"
              width="20%" // Adjust the size as needed
              animation={`${fadeInOut} 1.5s ease-in-out, ${pulsate} 1.5s ease-in-out infinite`}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default LogoAnimation;
