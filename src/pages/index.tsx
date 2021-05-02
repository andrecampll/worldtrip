import { Container } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Categories } from '../components/Categories';

export default function Home() {
  return (
    <Container maxWidth="1440" p="0">
      <Banner />
      <Categories />
    </Container>
  )
}
