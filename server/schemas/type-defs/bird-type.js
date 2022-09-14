const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const BirdType = new GraphQLObjectType({
  name: 'Bird', // name of db table
  // TODO: fied keys camel cased
  fields: () => ({
    id: { type: GraphQLInt },
    common_name: { type: GraphQLString },
    latin_name: { type: GraphQLString },
    bird_family: { type: GraphQLString },
    uk_conservation_status: { type: GraphQLString }, // TODO: Custom type, union 'green, amber, red'
    uk_population: { type: GraphQLInt },
  }),
});

module.exports = BirdType;
