var express = require("express");
var app = express();


app.use(require("./routes/authentication"));

app.listen(3001, () => {
  console.log(`listening on port 3001`);
});

// const jwt = require("jwt-simple");

// let user = {
//   id: "12345",
//   username: "Hiroko",
//   email: "me@me.com"
// };


