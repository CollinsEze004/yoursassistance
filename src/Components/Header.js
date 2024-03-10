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

const Header = () => {
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

  // fontSize={{base: "24px",md:"32px"}}

  const [ispres, setIspres] = useState(false);
  const [isblock, setIsblock] = useState("block");

  const pres = () => {
    setIspres(true);
    setIsblock("none");
  };

  const presse = () => {
    setIspres(false);
    setIsblock("block");
  };

  const chan = () => {
    let a = document.querySelector(".bo");
    a.style.display = "block";
  };
  const cha = () => {
    let a = document.querySelector(".bo");
    a.style.display = "none";
  };

  return (
    <Box>
      {ispres ? (
        <Box
          width="100%"
          height="100vh"
          backgroundColor="blue"
          display="block"
          position="fixed"
          left="0"
          right="0"
          top="0"
          zIndex="1"
        >
          <Box
            width="50%"
            margin="auto"
            marginTop="4%"
            textAlign="center"
            color="white"
          >
            <Text
              fontSize="3rem"
              fontWeight="700"
              onClick={presse}
              cursor="pointer"
            >
              ✕
            </Text>
            <Text
              fontSize="20px"
              fontWeight="600"
              cursor="pointer"
              paddingTop="8%"
              opacity="0.8"
            >
              Home
            </Text>
            <Text
              fontSize="20px"
              fontWeight="600"
              cursor="pointer"
              paddingTop="4%"
              opacity="0.8"
            >
              Projects
            </Text>
            <Text
              fontSize="20px"
              fontWeight="600"
              cursor="pointer"
              paddingTop="4%"
              opacity="0.8"
            >
              Services
            </Text>
            <Text
              fontSize="20px"
              fontWeight="600"
              cursor="pointer"
              paddingTop="4%"
              opacity="0.8"
            >
              About
            </Text>
            <Text
              fontSize="20px"
              fontWeight="600"
              cursor="pointer"
              paddingTop="4%"
              opacity="0.8"
            >
              Contact
            </Text>
          </Box>
        </Box>
      ) : (
        <Text display="none">h</Text>
      )}

      <Box
        transition="display 2s ease-out"
        className="bo"
        display="none"
        width="100%"
        height="100vh"
        backgroundColor="blue"
        color="white"
        position="fixed"
        left="0"
        right="0"
        top="0"
        zIndex="1"
        padding="2%"
      >
        <Text
          fontSize="2rem"
          fontWeight="700"
          onClick={cha}
          cursor="pointer"
          paddingTop="6%"
          paddingLeft="6%"
        >
          ✕
        </Text>

        <Text
          fontSize="1.4rem"
          fontWeight="600"
          cursor="pointer"
          paddingTop="8%"
          opacity="0.8"
          paddingLeft="6%"
        >
          Home
        </Text>
        <Text
          fontSize="1.4rem"
          fontWeight="600"
          cursor="pointer"
          paddingTop="4%"
          opacity="0.8"
          paddingLeft="6%"
        >
          Projects
        </Text>
        <Text
          fontSize="1.4rem"
          fontWeight="600"
          cursor="pointer"
          paddingTop="4%"
          opacity="0.8"
          paddingLeft="6%"
        >
          Services
        </Text>
        <Text
          fontSize="1.4rem"
          fontWeight="600"
          cursor="pointer"
          paddingTop="4%"
          opacity="0.8"
          paddingLeft="6%"
        >
          About
        </Text>
        <Text
          fontSize="1.4rem"
          fontWeight="600"
          cursor="pointer"
          paddingTop="4%"
          opacity="0.8"
          paddingLeft="6%"
        >
          Contact
        </Text>

        <Text
          fontSize="1.4rem"
          fontWeight="600"
          cursor="pointer"
          paddingTop="58%"
          opacity="1"
          textAlign="center"
        >
          Follow us on
        </Text>
        <Image
          src={frame9060}
          width="70%"
          height="5.5vh"
          margin="auto"
          marginTop="3%"
        />
        <Box width="70%" margin="auto" marginTop="4%">
          <Flex flexDirection="row" justifyContent="space-between">
            <Image src={facebook} width="15%" height="5.5vh" />
            <Image src={instagram} width="15%" height="5.5vh" />
            <Image src={linkedin} width="15%" height="5.5vh" />
            <Image src={outline} width="15%" height="5.5vh" />
            <Image src={snapchat} width="15%" height="5.5vh" />
            <Image src={twitter} width="15%" height="5.5vh" />
          </Flex>
        </Box>
      </Box>

      <Box display={isblock}>
        {isMobile ? (
          <Flex padding="3% 0" marginTop="4%">
            <Image width="50%" src={logo} />
            <Spacer />

            <Image
              src={group3}
              width="14%"
              height="5.5vh"
              cursor="pointer"
              onClick={chan}
            />

            {/* <Menu>
            <MenuButton backgroundColor="#0298DA" as={Button}>
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
              <Box textAlign="center">
                <Button
                  backgroundColor="#0298DA"
                  color="white"
                  borderRadius="5px"
                  paddingY="5%"
                  paddingX="20%"
                  fontSize="14px"
                >
                  <NavLink to="/contact-us">Contact us</NavLink>
                </Button>
              </Box>
            </MenuList>
          </Menu> */}
          </Flex>
        ) : (
          // <Flex
          //   className={`sticky-header-container ${isSticky ? "sticky" : ""}`}
          //   paddingTop="1%"
          //   alignItems="center"
          // >
          //   <Box flex="1">
          //     <Image width="40%" src={logo} />
          //   </Box>

          //   <Box id="container">
          //     <List id="menu" styleType="none" padding="0">
          //       <ListItem
          //         display="block"
          //         position="relative"
          //         zIndex="10"
          //         padding="13px 20px 13px 20px"
          //         textDecoration="none"
          //         color="rgba(75,75,75,1)"
          //         lineHeight="1"
          //         fontWeight="600"
          //         fontSize="12px"
          //         letterSpacing="-0.05em"
          //         background="transparent"
          //         textShadow="0 1px 1px rgba(255,255,255,.9)"
          //         transition="all .25s ease-in-out"
          //       >
          //         <NavLinkWithLine to="/">Home</NavLinkWithLine>
          //       </ListItem>

          //       <ListItem
          //         onMouseEnter={() => handleMenuHover(1)}
          //         onMouseLeave={handleMenuLeave}
          //         position="relative"
          //         perspective="1000px"
          //       >
          //         <Link
          //           display="block"
          //           position="relative"
          //           zIndex="10"
          //           textDecoration="none"
          //           color="rgba(75,75,75,1)"
          //           lineHeight="1"
          //           fontWeight="600"
          //           fontSize="12px"
          //           letterSpacing="-0.05em"
          //           background="transparent"
          //           textShadow="0 1px 1px rgba(255,255,255,.9)"
          //           transition="all .25s ease-in-out"
          //         >
          //           <NavLinkWithLine to="/projects">Projects</NavLinkWithLine>
          //         </Link>

          //         <List
          //           className={visibleMenu === 1 ? "visible" : ""}
          //           position="absolute"
          //           left="0"
          //           zIndex="1"
          //           width="200px"
          //           padding="0"
          //           opacity="0"
          //           visibility="hidden"
          //           borderBottomLeftRadius="4px"
          //           borderBottomRightRadius="4px"
          //           background="transparent"
          //           overflow="hidden"
          //           transformOrigin="50% 0%"
          //         >
          //           <ListItem>
          //             <Link href="#">Chairs God</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Dreadit</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Seedtime Landscape</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Coastwide Church</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Adire Teeny</Link>
          //           </ListItem>
          //         </List>
          //       </ListItem>

          //       <ListItem
          //         onMouseEnter={() => handleMenuHover(1)}
          //         onMouseLeave={handleMenuLeave}
          //         float="left"
          //         position="relative"
          //         perspective="1000px"
          //       >
          //         <Link
          //           display="block"
          //           position="relative"
          //           zIndex="10"
          //           // padding="13px 20px 13px 20px"
          //           textDecoration="none"
          //           color="rgba(75,75,75,1)"
          //           lineHeight="1"
          //           fontWeight="600"
          //           fontSize="12px"
          //           letterSpacing="-0.05em"
          //           background="transparent"
          //           textShadow="0 1px 1px rgba(255,255,255,.9)"
          //           transition="all .25s ease-in-out"
          //         >
          //           <NavLinkWithLine to="/services">Services</NavLinkWithLine>
          //         </Link>

          //         <List
          //           className={visibleMenu === 1 ? "visible" : ""}
          //           position="absolute"
          //           left="0"
          //           zIndex="1"
          //           width="200px"
          //           padding="0"
          //           opacity="0"
          //           visibility="hidden"
          //           borderBottomLeftRadius="4px"
          //           borderBottomRightRadius="4px"
          //           background="transparent"
          //           overflow="hidden"
          //           transformOrigin="50% 0%"
          //         >
          //           <ListItem>
          //             <Link href="#">Brand Identity Design</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Graphics Design</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Web Development</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Digital Marketing</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Product Design</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">UI/UX Design</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Content Design</Link>
          //           </ListItem>
          //           <ListItem>
          //             <Link href="#">Animations</Link>
          //           </ListItem>
          //         </List>
          //       </ListItem>

          //       <ListItem
          //         display="block"
          //         position="relative"
          //         zIndex="10"
          //         padding="13px 20px 13px 20px"
          //         textDecoration="none"
          //         color="rgba(75,75,75,1)"
          //         lineHeight="1"
          //         fontWeight="600"
          //         fontSize="12px"
          //         letterSpacing="-0.05em"
          //         background="transparent"
          //         textShadow="0 1px 1px rgba(255,255,255,.9)"
          //         transition="all .25s ease-in-out"
          //       >
          //         <NavLinkWithLine to="/about-us">About</NavLinkWithLine>
          //       </ListItem>
          //     </List>
          //   </Box>

          //   <Box flex="1">
          //     <Button
          //       backgroundColor="#0298DA"
          //       color="white"
          //       borderRadius="5px"
          //       padding="5% 9%"
          //       float="right"
          //     >
          //       <NavLink to="/contact-us">Contact us</NavLink>
          //     </Button>
          //   </Box>
          // </Flex>

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
                  onClick={pres}
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
