import { Container, Heading, Box } from '@chakra-ui/react';
import { NextRouter, useRouter } from "next/router";

import { Banner } from '../../components/continent/Banner';
import { ContinentBio } from '../../components/continent/ContinentBio';
import { ContinentCities } from '../../components/continent/ContinentCities';

export default function ContinentPage() {
  const { query } : NextRouter  = useRouter();
  
  return (
    <>
      <title>Worldtrip - {query.continent_slug}</title>

      <Container maxWidth="1440" p="0">
        <Banner />
        <Container maxWidth="100%" py="20" px="100" m="0">
          <ContinentBio />
          <ContinentCities />
        </Container>
      </Container>
    </>
  );
}