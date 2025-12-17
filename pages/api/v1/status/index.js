import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseMaxConnectionsResponse = await database.query(
    "SHOW max_connections",
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResponse.rows[0].max_connections;

  const databaseOpenedConnectionsResponse = await database.query({
    text: "SELECT count(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [process.env.POSTGRES_DB],
  });

  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResponse.rows[0].count;

  const databaseVersionResponse = await database.query("SHOW server_version");
  const databaseVersionValue = databaseVersionResponse.rows[0].server_version;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: parseInt(databaseOpenedConnectionsValue),
      },
    },
  });
}

export default status;
