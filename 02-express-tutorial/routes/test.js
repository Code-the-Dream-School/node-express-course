const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "It worked!" });
});

module.exports = router;
