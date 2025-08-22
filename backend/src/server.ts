import Fastify from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllUsers } from './service'

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyCors, { origin: '*' })

fastify.get('/', async (_, reply) => {
  try {
    const users = await getAllUsers()
    return users
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send({ message: error.message })
    }
    fastify.log.error(error)
  }
})

try {
  await fastify.listen({ port: 8000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
