const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");

const Auth = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = await jwt.verify(token, jwtSecret);

    if (!decoded) {
      return res.status(402).send({
        errors: [
          {
            title: "Invalid Credentials",
            detail: "Not Authorized",
          },
        ],
      });
    }

    req.user = decoded.user;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
};

module.exports = Auth;
