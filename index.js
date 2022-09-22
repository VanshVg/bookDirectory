const express = require("express");
const route = require("./routes/bookRoutes");
require("./config/db");

const port = 4000;
const app = express();

app.use(express.json());
app.use("/api", route);

app.listen(4000, () => {
  console.log("Server is listening at 4000");
});
