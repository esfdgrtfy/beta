const { verify } = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.get("x-auth-token");
  if (!token || token === "") {
    req.isAuth = false;
    return res.status(401).send("Authorization failed..");
  } else {
    let decoded;

    try {
      decoded = verify(token, process.env.JWT_SECRET);
    } catch (error) {
      req.isAuth = false;
      return res.status(401).send("Authorization failed..");
    }

    if (!decoded) {
      req.isAuth = false;
      return res.status(401).send("Authorization failed..");
    } else {
      req.isAuth = true;
      if (decoded.user && decoded.user.role === "admin")
        req.admin = decoded.user;
      if (decoded.user && decoded.user.role === "user") req.user = decoded.user;
      req.userData = decoded;
      return next();
    }
  }
};
