const express = require("express");
const app = express();
const routes = require("./route/routePemasok");

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use("/Pemasok", routes);

app.listen(3000, () => {
  console.log("running on 3000");
});
