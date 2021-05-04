import { Container } from '@chakra-ui/react';
import { NextRouter, useRouter } from "next/router";

import { Banner } from '../../components/continent/Banner';
import { ContinentBio } from '../../components/continent/ContinentBio';

export default function ContinentPage() {
  const { query } : NextRouter  = useRouter();
  
  return (
    <>
      <title>Worldtrip - {query.continent_slug}</title>

      <Container maxWidth="1440" p="0">
        <Banner />
        <ContinentBio />
      </Container>
    </>
  );
}