const { Client } = require('pg');
const { env } = require('process')

// Create a new client instance
const client = new Client({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DATABASE,
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    // Perform database operations here
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL database:', error);
  });
