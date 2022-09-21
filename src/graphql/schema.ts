import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    status: {
      type: GraphQLString,
      resolve(_parent, _args) {
        return 'Welcome to GraphQL'
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
