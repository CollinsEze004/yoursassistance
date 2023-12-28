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
        height="590px"
        width="710px"
        objectFit="cover"
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
          backgroundColor="rgba(0, 0, 0, 0.7)"
          color="white"
          margin="4.5% 2% 2.7% 1%"
          borderRadius="20px"
        >
          {description}
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
