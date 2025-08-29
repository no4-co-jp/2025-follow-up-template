import '@fastify/mysql'

// if you passed promise = true
declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPromisePool
  }
}
