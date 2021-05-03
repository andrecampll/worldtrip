import { useEffect, useState } from 'react';
import { Flex, Heading, Image, Box, Grid } from "@chakra-ui/react";

type Category = {
  id: number;
  name: string;
  image: string;
}

import { api } from '../services/api';

export function Categories() {
  const [ categories, setCategories ] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <Flex direction="column" align="center" justify="center">
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap="20"
        height="220"
        mt="24"
      >
        {
          categories.map(category => (
            <Flex direction="column" align="center" key={category.id}>
              <Image src={`/svg/${category.image}.svg`} height="20"/>
              <Heading as="h4" fontSize="24" fontWeight="semibold" mt="3">
                {category.name}
              </Heading>
            </Flex>
          ))
        }
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
