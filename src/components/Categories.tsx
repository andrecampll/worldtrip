import { Flex, Heading, Image, Box, Grid } from "@chakra-ui/react";

export function Categories() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap="20"
        height="220"
        mt="24"
      >
        <Flex direction="column" align="center">
          <Image src="/svg/cocktail.svg" height="20"/>
          <Heading as="h4" fontSize="24" fontWeight="semibold" mt="3">
            vida noturna
          </Heading>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/svg/surf.svg" height="20"/>
          <Heading as="h4" fontSize="24" fontWeight="semibold" mt="3">
            praia
          </Heading>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/svg/building.svg" height="20"/>
          <Heading as="h4" fontSize="24" fontWeight="semibold" mt="3">
            moderno
          </Heading>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/svg/classic.svg" height="20"/>
          <Heading as="h4" fontSize="24" fontWeight="semibold" mt="3">
            clássico
          </Heading>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/svg/world.svg" height="20"/>
          <Heading as="h4" fontSize="24" fontWeight="semibold" mt="3">
            e mais...
          </Heading>
        </Flex>
      </Grid>

      <Box
        width="90px"
        borderTop="2px solid #47585B"
        _before={{
          content:'" "',
          whiteSpace: 'pre',
        }}
      />
    </Flex>
  );
}
