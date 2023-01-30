const authorize = (req, res, next) => {
  const user = req.query;

  if (user === "aiman") {
    req.user = { name: "Aiman", id: "3" };
  } else {
    res.status(401).send("unauthorized");
  }
  console.log("authorized");
  next();
};

module.exports = authorize;
