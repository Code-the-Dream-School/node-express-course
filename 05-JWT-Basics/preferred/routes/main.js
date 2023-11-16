const express = require("express");
const router = express();

const { logon, hello } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

router.route("/hello").get(authMiddleware, hello);
router.route("/logon").post(logon);

module.exports = router;
