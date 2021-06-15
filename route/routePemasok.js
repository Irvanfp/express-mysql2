const express = require("express");
const routes = express();
const controllerPemasok = require("../controller/controllerPemasok");

routes.get("/", controllerPemasok.getPemasok);
routes.post("/", controllerPemasok.createPemasok);
routes.put("/", controllerPemasok.updatePemasok);
routes.delete("/", controllerPemasok.deletePemasok);

module.exports = routes;
