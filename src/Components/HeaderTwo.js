import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import logo from "../Assets/Svg/logoB.svg";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import "./HeaderTwo.css";
import menu from "../Assets/Svg/menu.svg";
import frame11 from "../Assets/Yoursassistance/Frame 11.png";
import frame9060 from "../Assets/Yoursassistance/Frame 9060.png";
import group3 from "../Assets/Yoursassistance/Group 3.png";
import group4 from "../Assets/Yoursassistance/Group 4.png";
import facebook from "../Assets/Yoursassistance/facebook.svg";
import instagram from "../Assets/Yoursassistance/instagram.svg";
import linkedin from "../Assets/Yoursassistance/linkedin.svg";
import outline from "../Assets/Yoursassistance/outline.svg";
import snapchat from "../Assets/Yoursassistance/snapchat.svg";
import twitter from "../Assets/Yoursassistance/twitter.svg";
import NavDrawer from "./NavDrawer";

const NavLinkWithLine = ({ to, children }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <Text fontSize="16px" fontWeight="600">
        {isMobile ? (
          <NavLink
            to={to}
            style={({ isActive }) => {
              return {
                color: isActive ? "#0298DA" : "#393637",
                fontWeight: isActive ? "600" : "500",
              };
            }}
          >
            {children}
          </NavLink>
        ) : (
          <NavLink
            to={to}
            style={({ isActive }) => ({
              color: isActive ? "White" : "#0298DA",
              fontWeight: isActive ? "600" : "500",
              backgroundColor: isActive ? "#0298DA" : "transparent",
              padding: "8px 16px",
              borderRadius: "5px",
              textDecoration: "none",
              display: "inline-block",
              width: "fit-content",
            })}
          >
            {children}
          </NavLink>
        )}
      </Text>
    </Box>
  );
};

const Header = ({onOpen}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const stickyThreshold = 100; // Adjust this value as needed

    if (scrollPosition > stickyThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
     

      <Box >
        {isMobile ? (
          <Flex padding="3" marginTop="4%">
            <Image width="50%" src={logo} />
            <Spacer />

            <Image
              src={group3}
              width="14%"
              height="5.5vh"
              cursor="pointer"
              onClick={() => onOpen()}
            />
          </Flex>
        ) : (
          <Box
            width="100%"
            backgroundColor="white"
            position="fixed"
            top="0"
            zIndex="1000"
            left="0"
            right="0"
            padding="1% 5%"
          >
            <Box width="96%" margin="auto">
              <Flex flexDirection="row" justifyContent="space-between">
                <Image src={frame11} width="30%" />
                <Image
                  src={group3}
                  width="4%"
                  height="5.5vh"
                  cursor="pointer"
                  onClick={() => onOpen()}
                />
              </Flex>
            </Box>
          </Box>
        )}
      </Box>
     
    </Box>
  );
};

export default Header;
