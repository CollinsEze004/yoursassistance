import React from "react";
import { Flex } from "@chakra-ui/react";
import CardGallery from "./CardGallery";

const VerticalText = ({ text }) => {
  const styles = {
    writingMode: "vertical-rl", // vertical right-to-left
    transform: "rotate(180deg)",
    whiteSpace: "nowrap", // to prevent text from wrapping
    fontSize: "128px", // Set font size to 128px
    color: "#0298DA", // Set text color to #0298DA
    fontWeight: "800",
    height: "fit-content",
  };

  return <div style={styles}>{text}</div>;
};

const HomeServices = () => {
  return (
    <Flex>
      <VerticalText text="Our Services" />
      <CardGallery />
    </Flex>
  );
};

export default HomeServices;
