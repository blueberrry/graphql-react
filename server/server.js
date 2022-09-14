const express = require('express');
const app = express();
const PORT = 2420;
const schema = require('./schemas/index.js');
// We'd actually be interacting with a live server here

const { graphqlHTTP } = require('express-graphql');

// schema, mutations, queries

// scheme is a combination of queries (getting data) and mutations (CRUD data), create and get

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // graphql GUI allows us to visualise queries and test them, see everything happening
  })
); // route endpoint, graphql only has one

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
