import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import CardGallery from "./CardGallery";

const VerticalText = ({ text }) => {
  const styles = {
    writingMode: "vertical-rl", // vertical right-to-left
    transform: "rotate(180deg)",
    whiteSpace: "nowrap", // to prevent text from wrapping

    color: "#0298DA", // Set text color to #0298DA
    fontWeight: "800",
    height: "fit-content",
  };

  return (
    <Text
      style={styles}
      fontSize={{ base: "28px", md: "128px" }}
      display={{ base: "none", md: "block" }}
    >
      {text}
    </Text>
  );
};

const HomeServices = () => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <VerticalText text="Our Services" />
      <Box
        textAlign="center"
        display={{ base: "block", md: "none" }}
        marginTop="7%"
      >
        <Text fontWeight="600" color="#0298DA" fontSize="38px">
          Our Services
        </Text>
      </Box>
      <CardGallery />
    </Flex>
  );
};

export default HomeServices;
