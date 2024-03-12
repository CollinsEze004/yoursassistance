import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import HamburgerWhite from "../Assets/Svg/HamburgerWhite.svg";
import { Link } from "react-router-dom";
import Mail from "../Assets/Svg/Mail.svg";
import facebook from "../Assets/Svg/FacebookWhite.svg";
import twitter from "../Assets/Svg/TwitterWhite.svg";
import instagram from "../Assets/Svg/InstagramWhite.svg";
import snapchat from "../Assets/Svg/SnapchatWhite.svg";
import tiktok from "../Assets/Svg/TiktokWhite.svg";
import linkedin from "../Assets/Svg/LinkendInWhite.svg";

const NavDrawer = ({ isOpen, onClose }) => {
  console.log(isOpen)
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent bgColor="#005B82">
          <DrawerBody>
            <Flex p="3" flexDirection="column" gap="40px" mt="6">
              <Image
                height="43px"
                width="43px"
                src={HamburgerWhite}
                onClick={() => onClose()}
              />
              <Flex
                flexDirection="column"
                gap="20px"
                color="#FFF"
                fontSize="24px"
                lineHeight="29px"
                fontWeight="600"
              >
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/about-us">About</Link>
                <Link to="/contact-us">Contact</Link>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex
              width="100%"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              gap="16px"
            >
              <Text
                color="#FFF"
                fontSize="20px"
                lineHeight="29px"
                fontWeight="600"
              >
                Follow us on
              </Text>
              <Flex>
                <Image src={Mail} />
                <Text
                  color="#FFF"
                  fontSize="16px"
                  lineHeight="29px"
                  fontWeight="500"
                >
                  info@yoursassistance.com
                </Text>
              </Flex>
              <Flex gap="10px">
                <Image width="25px" height="25px" src={facebook} />
                <Image width="25px" height="25px" src={instagram} />
                <Image width="25px" height="25px" src={twitter} />
                <Image width="25px" height="25px" src={snapchat} />
                <Image width="25px" height="25px" src={tiktok} />
                <Image width="25px" height="25px" src={linkedin} />
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
