import { Flex, Box, Heading, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      bgImage="url(/background.png)"
      height="300"
      px="20"
      align="center"
      justifyContent="space-between"
    >
      <Box>
        <Heading as="h1" fontWeight="medium">
          5 Continentes,
        </Heading>
        <Heading as="h1" fontWeight="medium" marginBottom="5">
          infinitas possibilidades.
        </Heading>
        <Heading as="h2" fontWeight="thin" fontSize="20" maxWidth="521">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </Heading>
      </Box>

      <Box>
        <Image src="/airplane.png" position="relative" top="10"/>
      </Box>
    </Flex>
  )
}
