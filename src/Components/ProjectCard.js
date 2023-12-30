// ProjectCard.js
import React, { useState } from "react";
import { Box, Text, Image, Tooltip } from "@chakra-ui/react";

const ProjectCard = ({ date, imageSrc, style, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      marginX="3%"
      style={style}
      marginY="3%"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text fontSize="sm" fontWeight="bold" mb="2">
        {date}
      </Text>
      <Image
        src={imageSrc}
        alt="Project Image"
        height="570px"
        width="680px"
        objectFit="cover"
        boxShadow="0px 10px 10px -5px rgba(0,0,0,0.5)"
        borderRadius="20px"
        
      />
      {isHovered && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          color="white"
          margin="5.5% 1% 1% 1%"
          borderRadius="20px"
          fontSize="32px"
          fontWeight="700"
          cursor="pointer"
         
        >
          Click to View
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
