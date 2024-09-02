require('dotenv').config();

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');


module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.DBUSER,
  database: process.env.DB,
  password: process.env.PW,
  port: process.env.DBPORT,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, '/eu-north-1-bundle.pem'))
  }

  // If connecting to an online db hosted somewhere
  // connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
})