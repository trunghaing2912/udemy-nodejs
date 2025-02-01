const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = (req, res) => {
  res.render("edit.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, myname, city]
  );

  console.log(">>> check results: ", results);

  res.send("Created user succeed!");

  // const [results, fields] = await connection.query("SELECT * FROM Users u");
  // console.log(">>> check results", results);
};

module.exports = {
  getHomepage,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
};
