const Fastify = require("fastify");

const fastify = Fastify({
    logger: false,
})

const middleware = (_req, _res, next) => {
    console.log('Yeni bir istek geldi');
    next()
  }
  
fastify.get("/hello", { preHandler: [middleware] }, (req, reply) => {
    reply.send("merhaba get istegi attiniz")
});

fastify.post("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("merhaba post istegi attiniz")
})

fastify.put("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("merhaba put istegi attiniz")
})

fastify.delete("/hello", { preHandler: [middleware] } ,  (req, reply) => {
    reply.send("merhaba delete istegi attiniz")
})

fastify.listen({port:3000}, (err, address) => {
    if(err) throw err;
})