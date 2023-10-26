const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.name) {
    return res.status(200).send(`Welcome ${req.body.name}`);
  }
  return res
    .status(400)
    .json({ success: false, message: "Please provide a name" });
});

module.exports = router;
