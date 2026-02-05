export default {
    schema: './lib/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.DATABASE_URL,
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },
  };