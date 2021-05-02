import { Container, Flex, Heading, Box } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Categories } from '../components/Categories';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <Container maxWidth="1440" p="0">
      <Banner />
      <Categories />
      <Box
        marginBottom="10"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          my="10"
        >
          <Heading fontWeight="medium" fontSize="36" as="h2" mb="2">
            Vamos nessa?
          </Heading>
          <Heading fontWeight="medium" fontSize="36" as="h2">
            Então escolha seu continente
          </Heading>
        </Flex>
        <Slider />
      </Box>
    </Container>
  )
}
