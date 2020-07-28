import { gql } from "apollo-server-koa";

export default gql`
  extend type Query {
    getTechnology(id: ID!): Technology
    getTechnologies(limit: Int, skip: Int): [Technology]
    getNumberOfTechnologies: Int!
  }

  extend type Mutation {
    createTechnology(technology: TechnologyInput!): Technology!
    updateTechnology(id: ID!, technology: TechnologyInput!): Technology
    deleteTechnology(id: ID!): Boolean!
  }

  type Technology {
    id: String!
    name: String!
    vendors: [Vendor]
  }

  input TechnologyInput {
    name: String!
    vendors: [ID]!
  }
`;
