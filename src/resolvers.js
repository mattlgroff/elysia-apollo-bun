export const resolvers = {
  Query: {
    books: (_, __, { dataSources }) => {
      // TODO: Use dataSources

      return [
        {
          title: 'Elysia',    
          author: 'saltyAom'
        }
      ];
    },
  }
};