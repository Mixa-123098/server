const Pool = require("pg").Pool;

const pool = new Pool({
  user: "site_portfolio_final_version_user",
  password: "AomyENvMp6nTOtzZfdpVRKjY2uKSS8MF",
  // dlit
  host: "dpg-cq2i1tbv2p9s73etb0n0-a.oregon-postgres.render.com",
  port: 5432,
  database: "site_portfolio_final_version",
});

module.exports = pool();
