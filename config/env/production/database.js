const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

module.exports = ({ env }) => ({
  connection: {  
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
      schema: env('DATABASE_SCHEMA', 'public'), // Set schema here
    },
      debug: false,
  },
  settings: {
    forceMigration: false,
  },
});