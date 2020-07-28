import {
  gql
} from "apollo-server-koa";

export default gql `
   type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;