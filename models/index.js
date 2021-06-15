const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "irvan",
  password: "1ndonesiAr@ya",
  database: "penjualan_afternoon",
});

module.exports = connection;
