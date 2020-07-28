import { ApolloServer } from "apollo-server-koa";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  engine: {
    reportSchema: true,
  },
});

export default server;
