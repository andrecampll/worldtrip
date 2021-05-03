import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Navigation,
  Pagination,
} from 'swiper/core';

import { api } from '../services/api';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

type Continent = {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export function Slider() {
  const [ continents, setContinents ] = useState<Continent[]>([]);

  useEffect(() => {
    async function loadContinents() {
      const { data } = await api.get('/continents');

      setContinents(data);
    };

    loadContinents();
  }, []);

  return (
    <Box h="450">
      <Swiper
        navigation={true}
        pagination={true}
        className='mySwiper'
        style={{
        height: '450px',
        maxWidth: '1240px',
      }}>
        {
          continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <Flex
                backgroundImage={`url(${continent.image_url})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height="100%"
                align="center"
                justify="center"
                direction="column"
              >
                <Heading as="h4" fontSize="40">
                  {continent.name}
                </Heading>
                <Text
                  as="span"
                  fontSize="20"
                  mt="5"
                >
                  {continent.description}
                </Text>
              </Flex>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  )
}