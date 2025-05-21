import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()
import fp from 'fastify-plugin'

async function authPlugin(fastify, options) {
    fastify.decorate('authenticate', async (request, reply) => {
        try {
            const token = request.headers.authorization?.split(' ')[1]
            const payload = jwt.verify(token, process.env.JWT_SECRET)
            request.user = payload
        } catch (error) {
            reply.code(401).send({ error: 'Unauthorized'})
        }
    })

    fastify.decorate('authorize', (roles) => {
        return async (request, reply) => {
            if (!roles.includes(request.user.role)){
                return reply.code(403).send({ error: 'Forbidden'})
            }
        }
    })
}

export default fp(authPlugin)