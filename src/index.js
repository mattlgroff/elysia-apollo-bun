import { Elysia } from 'elysia'
import { apollo } from '@elysiajs/apollo'
import { buildSchema } from 'graphql'
import { resolvers } from './resolvers';

// Initialize Elysia
const app = new Elysia();

// Builds schema from a .graphql file
const typeDefs = buildSchema(
  Bun.readFile("./src/schema.graphql")
);

// Apollo Server Plugin for Elysia
app.use(
  apollo({
      path: '/graphql',
      enablePlayground: true, // Default is disabled in production
      typeDefs, // Import schema from .graphql file
      resolvers, // Import resolvers from resolvers.js,
      context: async () => {
        // TODO: Add dataSources
        // TODO: Add request to context for auth

        return {
          dataSources: {

          }
        }
      }
  }),
);

// Set the default port to 3000, or use the PORT environment variable
const port = process.env.PORT || 3000;
    
app.listen(port, () => console.log(`Elysia 🥟 Apollo Server Listening on port ${port}`));