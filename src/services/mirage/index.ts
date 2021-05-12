import { createServer, ActiveModelSerializer, Model } from 'miragejs';

type Continent = {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

type Category = {
  id: number;
  name: string;
  image: string;
}

export type CityProps = {
  name: string;
  image_url: string;
  country: string;
  flag_image: string;
}

const continentsMock: Continent[] = [
  {
    id: 1,
    name: 'Europa',
    image_url: 'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80',
    description: 'Loren ipsum.',
  },
  {
    id: 2,
    name: 'Ásia',
    image_url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80',
    description: 'Loren ipsum.',
  },
  {
    id: 3,
    name: 'América do Sul',
    image_url: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1098&q=80',
    description: 'Loren ipsum.',
  },
];

const categoriesMock: Category[] = [
  {
    id: 1,
    name: 'vida noturna',
    image: 'cocktail',
  },
  {
    id: 2,
    name: 'praia',
    image: 'surf',
  },
  {
    id: 3,
    name: 'moderno',
    image: 'building',
  },
  {
    id: 4,
    name: 'clássico',
    image: 'classic',
  },
];

const citiesMock = [
  {
    id: 1,
    name: 'Londres',
    image_url: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    country: 'Reino Unido',
    flag_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
  },
  {
    id: 2,
    name: 'Paris',
    image_url: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcmlzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    country: 'França',
    flag_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png',
  },
  {
    id: 3,
    name: 'Roma',
    image_url: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    country: 'Itália',
    flag_image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
  },
  {
    id: 4,
    name: 'Praga',
    image_url: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    country: 'República Tcheca',
    flag_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png',
  },
  {
    id: 5,
    name: 'Amsterdam',
    image_url: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    country: 'Holanda',
    flag_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png',
  },
];

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },

    models: {
      continents: Model.extend<Partial<Continent>>({}),
    },

    routes() {
      this.namespace = 'api';
      this.get('/continents', (schema, request) => continentsMock);
      this.get('/categories', (schema, request) => categoriesMock);
      this.get('/cities', (schema, request) => citiesMock);

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}