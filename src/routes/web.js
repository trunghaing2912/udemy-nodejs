const express = require("express");
const {
  getHomepage,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
