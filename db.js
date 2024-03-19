const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "123098",
  // dlit
  host: "localhost",
  port: 5432,
  database: "projects",
});

module.exports = pool();
