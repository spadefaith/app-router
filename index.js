const Fastify = require('fastify');
const server = Fastify();
const proxy = require('@fastify/http-proxy');

const port = 7100;


server.register(require('@fastify/cors'), {
    origin:'*',
});


server.register(proxy, {
    upstream: `http://localhost:7999/`,
    prefix: '/apps/thunderclient', // optional
    http2: false, // optional

});


server.listen(port, '0.0.0.0',function(err, address){
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    } else {
        console.info('listening to port '+port);
    }
});