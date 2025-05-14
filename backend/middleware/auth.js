import jwt from "jsonwebtoken"

const authMiddeleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again." });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id; // ✅ body yerine direkt req'e eklendi
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Token Error" });
  }
};


export default authMiddeleware;