const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);

  res.render("edit.ejs", { userEdit: user });
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, myname, city]
  );

  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let { userId, email, myname, city } = req.body;

  await updateUserById(email, myname, city, userId);

  res.redirect("/");
};

module.exports = {
  getHomepage,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
};
