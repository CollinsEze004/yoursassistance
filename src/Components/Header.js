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
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../Assets/Svg/logoW.svg";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
// import menu from "../Assets/Svg/Menu.svg";
// import HomeIconA from "../Assets/Svg/Home.svg";
// import HomeIconNA from "../Assets/Svg/HomeNA.svg";
// import ServiceA from "../Assets/Svg/Service.svg";
// import ServiceNA from "../Assets/Svg/ServiceNA.svg";
// import ReviewsA from "../Assets/Svg/Reviews.svg";
// import ReviewsNA from "../Assets/Svg/ReviewsNA.svg";
// import PortfolioA from "../Assets/Svg/Portfolio.svg";
// import PortfolioNA from "../Assets/Svg/PortfolioNA.svg";
// import ContactA from "../Assets/Svg/Contact.svg";
// import ContactNA from "../Assets/Svg/ContactNA.svg";

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
                color: isActive ? "#017931" : "#002D3A",
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
              padding: "8px 16px", // Adjust padding as needed
              borderRadius: "5px", // Add border-radius for a button-like appearance
              textDecoration: "none", // Remove underline
              display: "inline-block", // Make it a block to allow setting width and height
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

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const renderIcon = (normalIcon, activeIcon) => {
    return activeLink === normalIcon ? activeIcon : normalIcon;
  };

  return (
    <Box>
      {isMobile ? (
        {
          /* <Flex padding="3%">
          <Image width="20%" src={logo} />
          <Spacer />

          <Menu>
            <MenuButton backgroundColor="#002D3A" marginRight="-5%" as={Button}>
              <Image src={menu} />
            </MenuButton>
            <MenuList height="fit-content" paddingY="5%" color="#002D3A">
              <MenuItem width="100%">
                <Image src={renderIcon(HomeIconNA, HomeIconA)} />
                <NavLinkWithLine
                  to="/"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Home
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem width="100%">
                <Image src={renderIcon(ServiceNA, ServiceA)} />
                <NavLinkWithLine
                  to="/services"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Services
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={renderIcon(PortfolioNA, PortfolioA)} />
                <NavLinkWithLine
                  to="/portfolio"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Portfolio
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={renderIcon(ReviewsNA, ReviewsA)} />
                <NavLinkWithLine
                  to="/reviews"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Reviews
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={renderIcon(ContactNA, ContactA)} />
                <NavLinkWithLine
                  to="/contact-us"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Contact
                </NavLinkWithLine>
              </MenuItem>
              <Box textAlign="center">
                <Button
                  backgroundColor="#FFB445"
                  color="white"
                  borderRadius="5px"
                  paddingY="5%"
                  paddingX="6%"
                  fontSize="14px"
                >
                  <NavLink to="/book-appointment">Book an appointment</NavLink>
                </Button>
              </Box>
            </MenuList>
          </Menu>
        </Flex> */
        }
      ) : (
        <Flex paddingTop="2%" alignItems="center">
          <Box flex="1">
            <Image src={logo} />
          </Box>

          <Flex flex="1" justifyContent="center">
            <Box>
              <NavLinkWithLine to="/">Home</NavLinkWithLine>
            </Box>
            <Spacer />
            <Box>
              <NavLinkWithLine to="/projects">Projects</NavLinkWithLine>
            </Box>
            <Spacer />
            <Box>
              <NavLinkWithLine to="/services">Services</NavLinkWithLine>
            </Box>
            <Spacer />
            <Box>
              <NavLinkWithLine to="/about-us">About</NavLinkWithLine>
            </Box>
          </Flex>

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
