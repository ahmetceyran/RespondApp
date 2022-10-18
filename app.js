const Fastify = require("fastify");

const fastify = Fastify({
    logger: false,
})

const middleware = (_req, _res, next) => {
    console.log('Yeni bir istek geldi');
    next()
  }
  
fastify.get("/hello", { preHandler: [middleware] }, (req, reply) => {
    reply.send("merhaba get isteği attınız")
});

fastify.post("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("merhaba post isteği attınız")
})

fastify.put("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("merhaba put isteği attınız")
})

fastify.delete("/hello", { preHandler: [middleware] } ,  (req, reply) => {
    reply.send("merhaba delete isteği attınız")
})

fastify.listen({port:3000}, (err, address) => {
    if(err) throw err;
})