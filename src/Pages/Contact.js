import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Input,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../Components/HeaderTwo";
import Footer from "../Components/Footer";
import pageCover from "../Assets/Svg/pageCover.svg";
import caution from "../Assets/Svg/caution.svg";
import success from "../Assets/Svg/success.svg";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };
  return (
    <Box>
      <Header />
      <Box marginX={{ base: "3%", md: "5%" }} marginTop="8%">
        

        <Text
          fontWeight="700"
          fontSize={{ base: "24px", md: "40px" }}
          textAlign="center"
          marginTop="5%"
          color="#0298DA"
        >
          Contact us
        </Text>

        <Box
          backgroundColor="#0298DA"
          borderRadius={{ base: "10px", md: "20px" }}
          marginX={{ base: "0%", md: "10%" }}
          marginY="3%"
          paddingBottom="5%"
        >
          <Box textAlign="center" marginX={{ base: "2%", md: "10%" }}>
            <Box color="white" padding="3% 0">
              <Text
                fontWeight="500"
                fontSize={{ base: "20px", md: "32px" }}
                marginTop="3%"
              >
                Talk to an Expert from our end
              </Text>
              <Text fontSize={{ base: "14px", md: "16px" }}>
                Get our expert advise on how to transform your brand ideas to
                something amazing
              </Text>
            </Box>
            <Box
              borderRadius="10px"
              margin="3%"
              padding="5%"
              backgroundColor="white"
              marginBottom="7%"
            >
              <Text  fontSize={{ base: "18px", md: "28px" }} padding="3% 0">
                Get in touch and schedule a meeting to discuss on how our and of
                our services can boost your company
              </Text>
              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Full Name"
                type="text"
                fontSize={{ base: "14px", md: "16px" }}
              />
              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Company Name"
                type="text"
                fontSize={{ base: "14px", md: "16px" }}
              />
              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Email Address"
                type="email"
                fontSize={{ base: "14px", md: "16px" }}
              />
              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Phone Number"
                type="phone"
                fontSize={{ base: "14px", md: "16px" }}
              />
              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Select Country"
                fontSize={{ base: "14px", md: "16px" }}
              />

              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Select City"
                fontSize={{ base: "14px", md: "16px" }}
              />

              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Select Service"
                fontSize={{ base: "14px", md: "16px" }}
              />

              <Input
                marginY={{ base: "5%", md: "2%" }}
                padding={{ base: "8% 3%", md: "3% 2%" }}
                placeholder="Select Country"
                fontSize={{ base: "14px", md: "16px" }}
              />

              <Flex justifyContent={{ base: "center", md: "center" }}>
                <Button
                  backgroundColor="#0298DA"
                  color="white"
                  padding={{ base: "9% 15%", md: "4% 10%" }}
                  onClick={onOpen}
                  marginTop="2%"
                >
                  Submit
                </Button>
              </Flex>
            </Box>
          </Box>

          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />

            {submit ? (
              <AlertDialogContent
                marginX="2%"
                paddingTop={{ base: "5%", md: "2%" }}
              >
                <Flex flexDirection="column" alignItems="center">
                  <Image width={{ base: "20%", md: "15%" }} src={success} />
                  <AlertDialogHeader textAlign="center">
                    Success
                  </AlertDialogHeader>
                  <AlertDialogBody textAlign="center">
                    Your inspection application has been sent successfully
                  </AlertDialogBody>
                  <Box padding="5% 0" textAlign="center">
                    <Button
                      onClick={onClose}
                      color="white"
                      backgroundColor="#017931"
                      ml={3}
                    >
                      Return to Dashboard
                    </Button>
                  </Box>
                </Flex>
              </AlertDialogContent>
            ) : (
              <AlertDialogContent
                marginX="2%"
                paddingTop={{ base: "5%", md: "2%" }}
              >
                <Flex flexDirection="column" alignItems="center">
                  <Image width={{ base: "20%", md: "15%" }} src={caution} />
                  <AlertDialogHeader textAlign="center">
                    Are you sure you want to submit
                  </AlertDialogHeader>
                  <AlertDialogBody textAlign="center">
                    You can easily go make and make sure the information
                    provided are correct.
                  </AlertDialogBody>
                  <Box padding="5% 0" textAlign="center">
                    <Button
                      backgroundColor="#FFB445"
                      color="white"
                      ref={cancelRef}
                      onClick={onClose}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      color="white"
                      backgroundColor="#017931"
                      ml={3}
                    >
                      Submit
                    </Button>
                  </Box>
                </Flex>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </Box>
        <Flex justifyContent="center" marginTop="5%">
          <Image src={pageCover} />
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
};

export default Contact;
