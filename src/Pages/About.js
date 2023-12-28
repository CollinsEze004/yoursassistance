import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";
import aboutBack from "../Assets/Png/aboutBack.png";
import logoB from "../Assets/Svg/logoB.svg";
import img1 from "../Assets/Png/aboutImg1.png";
import img2 from "../Assets/Png/aboutImg2.png";
import img3 from "../Assets/Png/aboutImg3.png";
import img4 from "../Assets/Png/aboutImg4.png";
import img5 from "../Assets/Png/aboutImg5.png";
import pageCover from "../Assets/Svg/pageCover.svg";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <Box>
      <Box paddingX="5%" backgroundColor="#0298DA">
        <Header />
        <Flex justifyContent="center">
          <Flex
            width="50%"
            justifyContent="center"
            alignItems="center"
            marginY="5%"
            borderRadius="20px"
            backgroundColor="white"
            textAlign="center"
          >
            <Image width="60%" src={aboutBack} />
          </Flex>
        </Flex>
      </Box>

      <Box marginX="5%" color="#393637" fontWeight="600">
        <Box marginTop="2%" width="70%">
          <Text fontSize="96px" fontWeight="bold" color="#0298DA">
            From Brand Whispers To{" "}
            <span style={{ color: "#ED3237" }}>Digital Roars.</span>
          </Text>
        </Box>
        <Flex alignItems="center" marginTop="5%">
          <Box width="80%" flex="1">
            <Text color="#0298DA" fontSize="48px" fontWeight="700">
              Welcome to Yoursassistance
            </Text>
            <Text width="90%">
              At Yoursassistance, we are your digital partners, dedicated to
              creating an online space that reflects our commitment to
              excellence in branding, web development, UI/UX design, digital
              marketing, content creation, content management, content writing,
              and animation services. Whether you're a startup seeking a brand
              identity or an established business looking to enhance your online
              presence, we've got you covered.
            </Text>
          </Box>

          <Box flex="1">
            <Image src={logoB} />
          </Box>
        </Flex>

        <Flex flexDirection="column" marginTop="5%">
          <Flex alignItems="center">
            <Box flex="1">
              <Image width="80%" src={img1} />
            </Box>

            <Box flex="1">
              <Text color="#0298DA" fontSize="48px" fontWeight="700">
                Our Mission
              </Text>
              <Text>
                Our primary mission is to provide businesses and companies with
                top-notch digital solutions that transcend expectations. We
                believe in the power of exclusive services to deliver
                world-class products, and we are passionate about helping our
                clients succeed in the digital landscape.
              </Text>
            </Box>
          </Flex>

          <Flex alignItems="center" flexDirection="row-reverse">
            <Box flex="1">
              <Image width="90%" src={img2} />
            </Box>

            <Box flex="1">
              <Text color="#0298DA" fontSize="48px" fontWeight="700">
                What Sets Us Apart
              </Text>
              <Text>
                Yoursassistance stands out in the crowded digital arena by
                offering more than just services—we provide an experience. Our
                commitment to excellence is evident in every project we
                undertake. We believe that it's not just about the products;
                it's about the journey—from brand whispers to digital roars.
              </Text>
            </Box>
          </Flex>

          <Flex marginTop="3%" alignItems="center">
            <Box flex="1">
              <Image width="90%" src={img3} />
            </Box>

            <Box flex="1">
              <Text color="#0298DA" fontSize="48px" fontWeight="700">
                Showcase of Excellence
              </Text>
              <Text>
                Explore our portfolio to witness the competence and capability
                we bring to the table. We showcase a diverse range of projects,
                each a testament to our dedication to quality and innovation.
                Our exclusive services are tailored to meet the unique needs of
                businesses seeking a competitive edge in the digital realm.
              </Text>
              <Button
                backgroundColor="#0298DA"
                color="white"
                padding="4% 5%"
                marginTop="3%"
                colorScheme='red'
                transition="1s ease-in"
              >
                Explore Projects
              </Button>
            </Box>
          </Flex>

          <Flex alignItems="center" flexDirection="row-reverse" marginTop="3%">
            <Box flex="1">
              <Image width="90%" src={img4} />
            </Box>

            <Box flex="1">
              <Text color="#0298DA" fontSize="48px" fontWeight="700">
                Interactive User Experience
              </Text>
              <Text width="90%">
                At Yoursassistance, we understand the importance of an
                interactive user experience. Navigating through our website is
                designed to be intuitive and engaging, mirroring the seamless
                experiences we create for our clients.
              </Text>
              <Button
                backgroundColor="#0298DA"
                color="white"
                padding="4% 5%"
                marginTop="3%"
                colorScheme='red'
                transition="1s ease-in"
              >
                Explore Projects
              </Button>
            </Box>
          </Flex>

          <Flex alignItems="center" marginTop="3%">
            <Box flex="1">
              <Image width="90%" src={img5} />
            </Box>

            <Box flex="1">
              <Text color="#0298DA" fontSize="48px" fontWeight="700">
                Get in Touch
              </Text>
              <Text>
                Ready to elevate your digital presence? Whether you're looking
                for a complete brand overhaul, a stunning website, or a targeted
                digital marketing strategy, we are here for you. Contact us to
                explore the possibilities of collaboration, and let's embark on
                a journey to digital success together.
              </Text>
              <Text>
                Remember, it's not just the best products that sell; it's the
                best-marketed products. From concept to execution,
                Yoursassistance is here to turn your brand whispers into digital
                roars.
              </Text>
              <Button
                backgroundColor="#0298DA"
                color="white"
                padding="4% 5%"
                marginTop="3%"
                colorScheme='red'
                transition="1s ease-in"
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Flex justifyContent="center" marginTop="5%">
        <Image src={pageCover} />
      </Flex>

      <Footer />
    </Box>
  );
};

export default About;
