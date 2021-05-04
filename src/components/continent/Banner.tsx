import { Flex, Heading } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      width="100%"
      height="500"
      backgroundImage="url(https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="flex-end"
      justify="flex-start"
      px="32"
      py="20"
    >
      <Heading
        fontSize="48"
        fontWeight="medium"
      >
        Europa
      </Heading>
    </Flex>
  );
}