import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Navigation,
  Pagination,
} from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

export function Slider() {
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
        <SwiperSlide>
          <Flex
            backgroundImage="url(https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height="100%"
            align="center"
            justify="center"
            direction="column"
          >
            <Heading as="h4" fontSize="40">
              Europa
            </Heading>
            <Text
              as="span"
              fontSize="20"
              mt="5"
            >
              Lorem ipsum dolor sit amet.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            backgroundImage="url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height="100%"
            align="center"
            justify="center"
            direction="column"
          >
            <Heading as="h4" fontSize="40">
              Ásia
            </Heading>
            <Text
              as="span"
              fontSize="20"
              mt="5"
            >
              Lorem ipsum dolor sit amet.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            backgroundImage="url(https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1098&q=80)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height="100%"
            align="center"
            justify="center"
            direction="column"
          >
            <Heading as="h4" fontSize="40">
              América do Sul
            </Heading>
            <Text
              as="span"
              fontSize="20"
              mt="5"
            >
              Lorem ipsum dolor sit amet.
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}