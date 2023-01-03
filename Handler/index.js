const jwt = require("jsonwebtoken");
const db = require("../Databse/database");

const getdata = (req, res) => {
  db.query("select * from users", function (err, recordset) {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    }

    res.status(200).send({
      recordset,
    });
  });
};
const postData = (req, res) => {
  let { username, password } = req.body;
  let { id } = req.params;
  let { a } = req.query;
  let header = req.headers;
  if (password.length < 8) {
    return res.status(400).send({
      message: "password shi se daal",
    });
  }
  // console.log(data);
  if (username && password) {
    try {
      db.promise().query(
        `INSERT INTO USERS VALUES('${username}','${password}')`
      );
      res.status(200).send({
        message: "Post data api",
        username,
        password,
        id,
        a,
        header,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
const patchData = (req, res) => {
  let jwtToken = jwt.sign(req.body, "123456");
  let data = req.body;
  let { id } = req.params;
  let header = req.headers;
  console.log(data);
  const decodedata = jwt.decode(jwtToken, "123456");
  res.status(200).send({
    message: "this is patch request",
    id,
    header,
    jwtToken,
    decodedata,
  });
};
module.exports = {
  getdata,
  postData,
  patchData,
};
