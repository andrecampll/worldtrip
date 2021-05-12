import { useEffect, useState } from "react";
import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

import { api } from "../../services/api";

export type CityProps = {
  id: string;
  name: string;
  image_url: string;
  country: string;
  flag_image: string;
}

export function ContinentCities() {
  const [ cities, setCities ] = useState<CityProps[]>([]);

  useEffect(() => {
    async function loadCities() {
      const { data } = await api.get('cities');

      console.log(data);

      setCities(data);
    }

    loadCities();
  }, []);

  return (
    <>
      <Heading fontWeight="medium" fontSize="36" mb="10">
        Cidades +100
      </Heading>

      <Grid gridTemplateColumns="repeat(4, 1fr)" gap="10">
        {
          cities.map(city => (
            <City key={city.id} {...city} />
          ))
        }
      </Grid>
    </>
  );
}