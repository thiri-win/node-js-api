const express = require("express")
const app = express();

const serverless = require("serverless-http");

const morgan = require("morgan");

const bodyparser = require("body-parser");

const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;

const path = require("path");

const connectDB = require("./server/database/connection");

//log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

//set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

// load routers
app.use("/", require("./server/routes/router"))

app.listen(PORT, ()=>console.log(`server is running on http://localhost:${PORT}`));

module.exports=app;
module.exports.handler = serverless(app);