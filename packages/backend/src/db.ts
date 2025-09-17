import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
  host: 'mysql',
  user: 'user',
  password: 'password',
  database: 'todo',
  port: 3306
})
