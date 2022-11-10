const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "24h" });
};

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Chưa nhập đầy đủ username và password!",
      });
    }
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Không tìm thấy username!",
        });
      }
      if (password !== user.password) {
        return res.status(400).json({
          success: false,
          message: "Password không đúng!",
        });
      }
      const accessToken = generateAccessToken(user.toJSON());
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET);
      refreshTokens.push(refreshToken);
      res.status(200).json({
        success: true,
        message: "Đăng nhập thành công!",
        currentUser: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
      console.log("list refreshtoken: ", refreshTokens)
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Lỗi server!",
      });
    }
  },

  logout: async (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
    console.log("list refreshtoken: ", refreshTokens)
  },

  refreshToken: async (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) {
      return res.status(401).json({
        success: false,
        message: "Chưa truyền token vào request!",
      });
    }
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json({
        success: false,
        message: "Token không hợp lệ!",
      });
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
        if (error) {
          return res.status(403).json({
            success: false,
            message: "Token không hợp lệ!",
          });
        }
        const accessToken = generateAccessToken({ username: user.name });
        res.status(200).json({
          success: true,
          message: "Làm mới token thành công!",
          accessToken: accessToken,
        });
      }
    );
  },
};

module.exports = authController;
