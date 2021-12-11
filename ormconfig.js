var dbConfig = {
  synchronize: false,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },

  type: 'mysql',
  url: process.env.CLEARDB_DATABASE_URL,
  migrationsRun: true,
  entities: ['**.*.js'],
  ssl: {
    rejectUnauthorized: false,
  },
};
module.exports = dbConfig;
