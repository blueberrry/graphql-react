const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
const birdData = require('../MOCK_DATA.json');

const BirdType = require('./type-defs/bird-type');

// TODO: Folder for mutations, folder for queries
// TODO: TS files

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // getAllUsers, // like creating two routes
    // getUserById
    getAllBirds: {
      type: new GraphQLList(BirdType),
      // args: { id: { type: GraphQLInt}}
      resolve(parent, args) {
        // What is parent?
        // args.id accessible if args passed
        // this is where we'd select/find from sql/mongodb etc
        return birdData;
      },
    },
    getBirdsByConservationStatus: {
      type: new GraphQLList(BirdType),
      args: { conservationStatus: { type: GraphQLString } },
      resolve(parent, args) {
        console.log('🚀 ~ file: index.js ~ line 29 ~ resolve ~ args', args);
        console.log('🚀 ~ file: index.js ~ line 29 ~ resolve ~ parent', parent);
        return birdData.filter((item) => item.uk_conservation_status === args.conservationStatus);
      },
    },
  },
}); // obj

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBird: {
      type: BirdType,
      args: {
        // Not asking for ID because db usually creates one automatically
        common_name: { type: GraphQLString },
        latin_name: { type: GraphQLString },
        bird_family: { type: GraphQLString },
        uk_conservation_status: { type: GraphQLString }, // TODO: Custom type, union 'green, amber, red'
        uk_population: { type: GraphQLInt },
      },
      resolve(parent, args) {
        // db.query('INSERT ...')
        birdData.push({
          id: birdData.length + 1,
          common_name: args.common_name,
          latin_name: args.latin_name,
          bird_family: args.bird_family,
          uk_conservation_status: args.uk_conservation_status,
          uk_population: args.uk_population,
        });
        return args; // res.send, send back data we passed is correct
      },
    },
    // updateBird,
    // deleteBird
  },
}); // CRUD

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
