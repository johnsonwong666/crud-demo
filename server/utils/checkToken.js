const expressJwt = require("express-jwt");

const jwtAuth = expressJwt({
  secret: "secret12345",
  algorithms: ["HS256"],
}).unless({ path: ["/api/login"] });

module.exports = jwtAuth;
