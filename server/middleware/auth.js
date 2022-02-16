const User = require("../db/connect");

const authenticateUser = (req, res, next) => {
  User.findOne({
    username: req.body.username,
  })
    .then((user) => {
      res.locals.user = user;
      next();
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

module.exports = {
  authenticateUser,
};
