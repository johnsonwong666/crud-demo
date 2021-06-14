//引入express模块
const express = require("express");
//创建app对象
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//引入路由
const person = require("./router/person");
app.use("/api", person);



//连接数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
const db = mongoose.connection;
db.on("error", console.log);
db.once("open", () => {
  console.log("database connected");
});

//服务启动端口
app.listen(3000, () => {
  console.log(`app linstening on port 3000.`);
});
