import {
  Container,
  Flex,
  Text,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export function ContinentBio() {
  return (
    <Flex justify="space-between" align="center" mb="16">
      <Box maxWidth="600">
        <Text fontSize="24" lineHeight="9">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
      </Box>
      <Box w="100%">
        <UnorderedList
          listStyleType="none"
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
        >
          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text fontSize="48" fontWeight="bold" color="#FFBA08">
              50
            </Text>
            <Text as="span" fontWeight="bold">
              países
            </Text>
          </ListItem>
          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text fontSize="48" fontWeight="bold" color="#FFBA08">
              50
            </Text>
            <Text as="span" fontWeight="bold">
              línguas
            </Text>
          </ListItem>
          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text fontSize="48" fontWeight="bold" color="#FFBA08">
              50
            </Text>
            <Text as="span" fontWeight="bold">
              cidades +100
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}