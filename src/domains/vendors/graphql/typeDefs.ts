import { gql } from "apollo-server-koa";

export default gql`
  extend type Query {
    getVendor(id: ID!): Vendor
    getVendors(limit: Int, skip: Int): [Vendor]
    getNumberOfVendors: Int!
  }

  extend type Mutation {
    createVendor(vendor: VendorInput!): Vendor!
    updateVendor(id: ID!, vendor: VendorInput!): Vendor!
    deleteVendor(id: ID!): Boolean!
  }

  type Vendor {
    id: ID!
    name: String!
  }

  input VendorInput {
    name: String!
  }
`;
