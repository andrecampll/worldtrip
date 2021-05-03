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

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}