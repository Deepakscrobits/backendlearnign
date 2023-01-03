const express = require("express");
const { getdata, postData, patchData } = require("../Handler");
const indexRoutes = express.Router();
indexRoutes.get("/getdata", getdata);
indexRoutes.post("/postdata/:id", postData);
indexRoutes.patch("/patchdata/:id", patchData);
module.exports = {
  indexRoutes,
};
