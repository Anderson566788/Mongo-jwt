import fp from 'fastify-plugin'
import * as authController from '../controller/authController.js'

async function routes(fastify, options) {
    fastify.post('/register', authController.register)
    fastify.post('/login', authController.login)

    fastify.get('/admin-only', {
        preHandler: [fastify.authenticate, fastify.authorize(['admin'])],
        handler: async (request, reply) => {
            reply.send({ message: 'Welcome Admin!'})
        }
    })
}

export default fp(routes)