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
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import logo from "../Assets/Svg/logoW.svg";
import logoM from "../Assets/Svg/logoM.svg";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import "./Header.css";
import menu from "../Assets/Svg/menu.svg";


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
              color: isActive ? "#0298DA" : "white",
              fontWeight: isActive ? "600" : "500",
              backgroundColor: isActive ? "white" : "transparent",
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

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleMenuHover = (index) => {
    setVisibleMenu(index);
  };

  const handleMenuLeave = () => {
    setVisibleMenu(null);
  };

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
      {isMobile ? (
        <Flex padding="3%">
          <Image width="50%" src={logoM} />
          <Spacer />

          <Menu>
            <MenuButton
              backgroundColor="rgba(0, 0, 0, 0)"
              marginRight="-5%"
              as={Button}
              _hover={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <Image src={menu} />
            </MenuButton>
            <MenuList height="fit-content" paddingY="5%" color="#002D3A">
              <MenuItem width="100%">
                <NavLinkWithLine to="/">Home</NavLinkWithLine>
              </MenuItem>
              <MenuItem width="100%">
                <NavLinkWithLine to="/services">Services</NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <NavLinkWithLine to="/projects">Projects</NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <NavLinkWithLine to="/about-us">About</NavLinkWithLine>
              </MenuItem>
              <Box textAlign="center" marginTop="5%">
                <Button
                  backgroundColor="#0298DA"
                  color="white"
                  borderRadius="5px"
                  paddingY="5%"
                  paddingX="20%"
                  fontSize="14px"
                >
                  <NavLink to="/book-appointment">Contact Us</NavLink>
                </Button>
              </Box>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Flex
          className={`sticky-header-container ${isSticky ? "sticky" : ""}`}
          paddingTop="1%"
          alignItems="center"
        >
          <Box flex="1">
            <Image width="40%" src={logo} />
          </Box>

          <Box id="container">
            <List id="menu" styleType="none" padding="0">
              <ListItem
                display="block"
                position="relative"
                zIndex="10"
                padding="13px 20px 13px 20px"
                textDecoration="none"
                color="rgba(75,75,75,1)"
                lineHeight="1"
                fontWeight="600"
                fontSize="12px"
                letterSpacing="-0.05em"
                background="transparent"
                textShadow="0 1px 1px rgba(255,255,255,.9)"
                transition="all .25s ease-in-out"
              >
                <NavLinkWithLine to="/">Home</NavLinkWithLine>
              </ListItem>

              <ListItem
                onMouseEnter={() => handleMenuHover(1)}
                onMouseLeave={handleMenuLeave}
                position="relative"
                perspective="1000px"
              >
                <Link
                  display="block"
                  position="relative"
                  zIndex="10"
                  textDecoration="none"
                  color="rgba(75,75,75,1)"
                  lineHeight="1"
                  fontWeight="600"
                  fontSize="12px"
                  letterSpacing="-0.05em"
                  background="transparent"
                  textShadow="0 1px 1px rgba(255,255,255,.9)"
                  transition="all .25s ease-in-out"
                >
                  <NavLinkWithLine to="/projects">Projects</NavLinkWithLine>
                </Link>

                <List
                  className={visibleMenu === 1 ? "visible" : ""}
                  position="absolute"
                  left="0"
                  zIndex="1"
                  width="200px"
                  padding="0"
                  opacity="0"
                  visibility="hidden"
                  borderBottomLeftRadius="4px"
                  borderBottomRightRadius="4px"
                  background="transparent"
                  overflow="hidden"
                  transformOrigin="50% 0%"
                >
                  <ListItem>
                    <Link href="#">Chairs God</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Dreadit</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Seedtime Landscape</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Coastwide Church</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Adire Teeny</Link>
                  </ListItem>
                </List>
              </ListItem>

              <ListItem
                onMouseEnter={() => handleMenuHover(1)}
                onMouseLeave={handleMenuLeave}
                float="left"
                position="relative"
                perspective="1000px"
              >
                <Link
                  display="block"
                  position="relative"
                  zIndex="10"
                  // padding="13px 20px 13px 20px"
                  textDecoration="none"
                  color="rgba(75,75,75,1)"
                  lineHeight="1"
                  fontWeight="600"
                  fontSize="12px"
                  letterSpacing="-0.05em"
                  background="transparent"
                  textShadow="0 1px 1px rgba(255,255,255,.9)"
                  transition="all .25s ease-in-out"
                >
                  <NavLinkWithLine to="/services">Services</NavLinkWithLine>
                </Link>

                <List
                  className={visibleMenu === 1 ? "visible" : ""}
                  position="absolute"
                  left="0"
                  zIndex="1"
                  width="200px"
                  padding="0"
                  opacity="0"
                  visibility="hidden"
                  borderBottomLeftRadius="4px"
                  borderBottomRightRadius="4px"
                  background="transparent"
                  overflow="hidden"
                  transformOrigin="50% 0%"
                >
                  <ListItem>
                    <Link href="#">Brand Identity Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Graphics Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Web Development</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Digital Marketing</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Product Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">UI/UX Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Content Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Animations</Link>
                  </ListItem>
                </List>
              </ListItem>

              <ListItem
                display="block"
                position="relative"
                zIndex="10"
                padding="13px 20px 13px 20px"
                textDecoration="none"
                color="rgba(75,75,75,1)"
                lineHeight="1"
                fontWeight="600"
                fontSize="12px"
                letterSpacing="-0.05em"
                background="transparent"
                textShadow="0 1px 1px rgba(255,255,255,.9)"
                transition="all .25s ease-in-out"
              >
                <NavLinkWithLine to="/about-us">About</NavLinkWithLine>
              </ListItem>
            </List>
          </Box>

          <Box flex="1">
            <Button
              backgroundColor="#ffffff"
              color="#0298DA"
              borderRadius="5px"
              padding="5% 9%"
              float="right"
            >
              <NavLink to="/contact-us">Contact us</NavLink>
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Header;
