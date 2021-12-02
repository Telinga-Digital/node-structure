require('dotenv').config()
const config = require('../utils/config')
const dbConfig = config(`database.connection.${config('database.default')}`)

module.exports = {
  development: {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: dbConfig.driver,
    logging: false,
    dialectOptions: {},
  },
  test: {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: dbConfig.driver,
    logging: false,
    dialectOptions: {},
  },
  production: {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: dbConfig.driver,
    logging: false,
    dialectOptions: {},
  },
}
