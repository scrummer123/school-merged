const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "game"
});
conn.connect(e => e ? console.log(`[app] Database error: ${e}`) : console.log("[app] Database connected"));

module.exports = conn;