const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
//const connecttestDB = require("./config/dbConnectionTest");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

connectDb();
app.use(cors());
// middlewares
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

module.exports = app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
