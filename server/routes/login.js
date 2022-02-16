module.exports = (req, res) => {
  if (!res.locals.user) {
    res.status(400).send("가입되어 있지 않은 계정입니다.");
  } else {
    res.status(200).send("가입되어 있는 계정입니다.");
  }
};
