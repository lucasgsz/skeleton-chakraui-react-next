import { Heading, Text, Flex } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Flex 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
    >
      <Heading>Hello World</Heading>
      <Text color="purple.500">ReactJs + NextJs + ChakraUI </Text>
    </Flex>
  )
}
