require("dotenv").config();
// 개발자 or 프로덕션 모드
if (process.env.NODE_ENV === "production") require("./config/production");
console.log(`${process.env.NODE_ENV} mode on`);

require("./db/connect");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/routers.js"));

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});
