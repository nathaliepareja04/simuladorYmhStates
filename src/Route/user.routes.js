import userCtrl from "../Controller/user.ctrl.js";

export const userRoutes = (fastify, opts, done) => {
    
    fastify.get("/",userCtrl.listAll);

    fastify.get("/:id", userCtrl.listById)

    done();
}