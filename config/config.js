require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASS_DEV,
    database: process.env.DB_DATABASE_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER_PRD,
    password: process.env.DB_PASS_PRD,
    database: process.env.DB_DATABASE_PRD,
    host: process.env.DB_HOST_PRD,
    dialect: 'mysql',
  },
};
