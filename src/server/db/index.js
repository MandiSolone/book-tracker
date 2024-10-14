import config from "../config/index.js"; // local config file
import mysql from "mysql"; // Default built in component
import url from "url"; // URL module for parsing, built in Node mod

let connection;

if (process.env.NODE_ENV === 'production') {
  console.log("Environment: Production");

  const clearDBUrl = process.env.CLEARDB_DATABASE_URL;
  console.log("ClearDB URL:", clearDBUrl || "Not set"); // Log the URL to ensure it's being picked up

  if (!clearDBUrl) {
    console.error("CLEARDB_DATABASE_URL is not defined");
    throw new Error("CLEARDB_DATABASE_URL is not defined");
  }

  try {
    const _url = new url.URL(clearDBUrl);
    const hostname = _url.hostname;
    const username = _url.username;
    const password = _url.password;
    const pathname = _url.pathname;
    const database = pathname.slice(1); // Remove leading '/'

    console.log("DB Config - Host:", hostname, "Database:", database); // Log the DB config

    connection = mysql.createPool({
      host: hostname,
      user: username,
      password: password,
      database: database
    });

      // Log when a connection is established
      connection.getConnection((err, conn) => {
        if (err) {
          console.error("Error connecting to ClearDB:", err);
        } else {
          console.log("Successfully connected to ClearDB.");
          conn.release(); // Release the connection back to the pool
        }
      });
       

    console.log("Database connection pool created for ClearDB.");
  } catch (error) {
    console.error("Error parsing ClearDB URL:", error);
  }

  // If not prod(ClearDB), then local MySQL
} else {
  console.log("Environment: Development");
  console.log("Using local MySQL config");

  connection = mysql.createPool(config.mysql);
  console.log("Database connection pool created for local MySQL.");
}

export default connection; // import connection to utils (wrap in promise)> export as query