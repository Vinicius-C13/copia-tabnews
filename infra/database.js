import { Client } from "pg";

async function query(queryObj) {
  const client = new Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect();

  const response = await client.query(queryObj);
  await client.end();
  return response;
}

export default {
  query: query,
};
