const express = require("express");
const { indexRoutes } = require("./Routes");
const app = express();
app.use(express.json());
app.use(indexRoutes);
app.listen(8080);
