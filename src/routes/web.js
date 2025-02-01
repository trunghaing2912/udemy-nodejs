const express = require("express");
const {
  getHomepage,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHanldeRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHanldeRemoveUser);

module.exports = router;
