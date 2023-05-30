import Fastify from "fastify";
import cors from "@fastify/cors";
import { userRoutes } from "./src/Route/user.routes.js";


const fastify = Fastify({
  logger: true,
});

fastify.register(cors, { origin: "*" });

fastify.register(userRoutes, { prefix: "/user" });

const start = async () => {
  try {
    await fastify.ready();
    fastify.listen( {port: 4000, host: "0.0.0.0"});
    console.log("El servidor está escuchando por el puerto ", 4000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();