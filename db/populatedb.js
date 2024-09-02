require('dotenv').config();

const { Client } = require("pg");
const fs = require('fs');
const path = require('path');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR (255),
text TEXT,
added DATE
);

INSERT INTO messages (username, text, added) VALUES ('Amando', 'Hi there!', '2024-08-27T13:04:22.123Z');
INSERT INTO messages (username, text, added) VALUES ('Charles', 'Hello World!', '2024-08-27T13:04:22.123Z');
INSERT INTO messages (username, text, added) VALUES ('Emily', 'Good morning everyone!', '2024-08-27T13:04:22.123Z');
INSERT INTO messages (username, text, added) VALUES ('David', 'Just joined the chat!', '2024-08-27T13:04:22.123Z');
INSERT INTO messages (username, text, added) VALUES ('Sophia', 'Nice to meet you all!', '2024-08-27T13:04:22.123Z');
INSERT INTO messages (username, text, added) VALUES ('Oliver', 'Looking forward to learning with you!', '2024-08-27T13:04:22.123Z');
`;


async function main() {
  const { HOST, DBUSER, DB, PW, DBPORT } = process.env
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${DBUSER}:${PW}@${HOST}:${DBPORT}/${DB}`,
    ssl: {
      ca: fs.readFileSync(path.join(__dirname, '/eu-north-1-bundle.pem'))
    }

  });
  console.log('1');
  await client.connect();
  console.log('2');
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();