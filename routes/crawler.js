var express = require("express");
var router = express.Router();
const { crawler } = require("../controllers");

router.get("/login", crawler.login);

module.exports = router;
