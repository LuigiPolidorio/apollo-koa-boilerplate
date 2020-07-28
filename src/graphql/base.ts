import { gql } from "apollo-server-koa";
import { GraphQLUpload } from "graphql-upload";

export const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  scalar Upload
`;

export const resolvers = {
  resolvers: {
    Upload: GraphQLUpload,
  },
};
