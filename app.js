require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
const app = express();
const session = require("express-session");

const db = mysql.createConnection({
  // Replace with user-appropriate values
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

const port = 3000;
app.set("port", process.env.port || port);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.render("home");
});
