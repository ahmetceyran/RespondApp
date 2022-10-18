const Fastify = require("fastify");

const fastify = Fastify({
    logger: false,
})

const middleware = (_req, _res, next) => {
    console.log('Post isegi icin istek gönderildi');
    next()
  }
  
fastify.get("/hello", { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba, GET istegi attiniz")
});

fastify.post("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba, POST istegi attiniz")
})

fastify.put("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba, PUT istegi attiniz")
})

fastify.delete("/hello", { preHandler: [middleware] } ,  (req, reply) => {
    reply.send("Merhaba, DELETE istegi attiniz")
})

fastify.listen({port:3000}, (err, address) => {
    if(err) throw err;
})