export const database = {
  default: process.env.DB_CONNECTION || 'mysql',
  connection: {
    mysql: {
      driver: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || '3306',
      database: process.env.DB_DATABASE || 'node',
      username: process.env.DB_USERNAME || 'node',
      password: process.env.DB_PASSWORD || ''
    },
    pgsql: {
      driver: 'pgsql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || '5432',
      database: process.env.DB_DATABASE || 'node',
      username: process.env.DB_USERNAME || 'node',
      password: process.env.DB_PASSWORD || ''
    }
  }
}

export default database