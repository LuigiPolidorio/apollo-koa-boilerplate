import { merge } from "lodash";
import { makeExecutableSchema } from "apollo-server-koa";
import * as Base from "./base";
import Vendor from "../domains/vendors/graphql/typeDefs";
import vendorResolvers from "../domains/vendors/graphql/resolvers";
import Technology from "../domains/technologies/graphql/typeDefs";
import technologyResolvers from "../domains/technologies/graphql/resolvers";

const typeDefs = [Base.typeDefs, Vendor, Technology];
const resolvers = merge(Base.resolvers, vendorResolvers, technologyResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
