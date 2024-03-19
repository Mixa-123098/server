const Pool = require("pg").Pool;
const pool = new Pool({
  user: "portfolio_zdxw_user",
  password: "VpIC48TmECcU8fyfgyCKxw1qLkcMRa7G",
  // dlit
  host: "dpg-cnsok20l6cac73dbjavg-a.frankfurt-postgres.render.com",
  port: 5432,
  database: "portfolio_zdxw",
});

module.exports = pool();
// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   password: "123098",
//   // dlit
//   host: "localhost",
//   port: 5432,
//   database: "projects",
// });

// module.exports = pool();
