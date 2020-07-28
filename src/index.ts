require("@babel/register")({
  extensions: [".js", ".ts"],
});
require("dotenv").config();
import Koa from "koa";
import helmet from "koa-helmet";
import apolloServer from "./graphql/server";
import mongo from "./database/mongo";

mongo.connect();

const app = new Koa();

// load apollo on koa
apolloServer.applyMiddleware({ app });

// security layer
app.use(helmet());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// start
app.listen(process.env.PORT);
console.info(`Server ready at http://localhost:${process.env.PORT}/graphql`);
