const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing or invalid format" });
  }
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "access denied" });
    }
    next();
  };
};

module.exports = { authorizeRoles, authenticateUser };
