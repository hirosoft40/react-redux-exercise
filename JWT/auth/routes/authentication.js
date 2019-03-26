var express = require("express");
var router = express.Router();
const jwt = require("jwt-simple");
const config = require("../config");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

let db = require("../models");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// create token for JWT
function tokenForUser(user) {
  let timestamp = new Date().getTime();

  // first argument:data, second argument:secret
  // secret must be "SECRET" cant be posted on github
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/protected", (req, res) => {
  res.send("you are in protected route");
});

// current logged out user
router.post("/signin", () => {
  res.json({ token: tokenForUser(req.user) });
});

router.post("/signup", (req, res) => {
  let emailUser = req.body.email;
  let passwordEncrypt = bcrypt.hashSync(req.body.password, 8);

  // existance check
  db.user.find({ where: { email: emailUser } }).then(results => {
    if (!results) {
      db.user
        .create({ email: emailUser, password: passwordEncrypt })
        .then(user => {
          return res.json({ token: tokenForUser(user) });
        });
    } else {
      return res.status(422).send({ error: "Email Already Exists" });
    }
  });
});

module.exports = router;
