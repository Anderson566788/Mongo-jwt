import env from 'dotenv'
env.config()
import mongoose from 'mongoose'
import authPlugin from './plugins/auth.js'
import authRoutes from './routes/authRoutes.js'


import Fastify from 'fastify'
const fastify = Fastify({ logger: true })

fastify.register(authPlugin)
fastify.register(authRoutes)

const { MONGO_URI, PORT } = process.env
const start = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        fastify.listen({ port: PORT})
        console.log('Server is running on port ' + PORT)
        console.log('conectado ao mongodb')

    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()