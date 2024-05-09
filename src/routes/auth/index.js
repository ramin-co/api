const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.get("/register", controller.register);
router.get("/login", controller.login);

module.exports = router;
