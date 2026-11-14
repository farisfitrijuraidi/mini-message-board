#! /usr/bin/env node

import pg from "pg";

const { Client } = pg;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR ( 255 ) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (author, text) 
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');`;

const seedDatabase = async (connectionString) => {
    console.log("seeding...");
    const client = new Client({ connectionString });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
};

const dbUrl = process.argv[2];
seedDatabase(dbUrl);
