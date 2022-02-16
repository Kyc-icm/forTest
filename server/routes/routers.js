const router = require("express").Router();
const auth = require("../middleware/auth");
/*
라우터 경로 정리
# 기본: http://localhost:8080/api
# 회원가입: http://localhost:8080/api/signup
# 로그인: http://localhost:8080/api/login
*/

// 기본
router.get("/", (req, res) => {
  res.status(200).send(`get요청 정상 작동`);
});

// 회원가입
// router.post('/signup', required('./signip'));
// 로그인
router.post("/login", auth.authenticateUser, require("./login"));

module.exports = router;
