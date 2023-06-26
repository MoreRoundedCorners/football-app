// app.js
const dotenv = require("dotenv");
const express = require("express");
const scraperRoutes = require("./routes/scraperRoutes");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// load environment variables
dotenv.config();

// cors
app.use(cors());

// routes
app.use("/api", scraperRoutes);

// mysql connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.MYSQL_PASSWORD,
  database: "web-scraping-data",
});

// start the server
db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("MySQL connected");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
