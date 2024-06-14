import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaNewspaper, FaAd } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" mb={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Financial Times
        </Heading>
        <Text fontSize="lg">Your source for the latest financial news</Text>
      </Flex>
      <Flex>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Article 1
              </Heading>
              <Text>Content of the first article goes here...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Article 2
              </Heading>
              <Text>Content of the second article goes here...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Article 3
              </Heading>
              <Text>Content of the third article goes here...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} ml={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Flex align="center">
              <FaAd size="24px" />
              <Text ml={2}>Advertisement 1</Text>
            </Flex>
            <Flex align="center">
              <FaAd size="24px" />
              <Text ml={2}>Advertisement 2</Text>
            </Flex>
            <Flex align="center">
              <FaAd size="24px" />
              <Text ml={2}>Advertisement 3</Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;