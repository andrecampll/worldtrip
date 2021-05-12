import { Box, Image, Flex, Text } from "@chakra-ui/react";

export type CityProps = {
  name: string;
  image_url: string;
  country: string;
  flag_image: string;
}

export function City({ name, image_url, country, flag_image }: CityProps) {
  return (
    <Box
      maxW="256"
      background="#333"
      borderRadius="4"
    >
      <Box
        borderTopRadius="4"
        backgroundImage={`url(${image_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="160"
        width="100%"
        w="100%"
      />
      <Flex px="6" py="6" align="center" justify="space-between">
        <Box>
          <Text as="h3" fontWeight="semibold" mb="2">{name}</Text>
          <Text as="h2">{country}</Text>
        </Box>
        <Box
          backgroundImage={`url(${flag_image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width="30px"
          height="30px"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
}