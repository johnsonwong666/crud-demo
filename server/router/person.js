//引入相关配置
const express = require("express");
const router = express.Router();
const tokens = require("../utils/checkToken");
//引入jwt

const controller = require("../controller/index");

//token验证
router.use(tokens);

//验证不通过
router.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("非法token");
  }
});

//引入模型
const person = require("../models/person");

//查询全部数据
router.get("/getPerson", (req, res) => {
  controller.getAll(person, req, res);
});

//根据id查询数据
router.get("/person/:id", (req, res) => {
  controller.getDetailById(person, req, res);
});

//根据id修改数据
router.post("/updatePerson", (req, res) => {
  controller.update(person, req, res);
});

//增加一条数据
router.post("/addPerson", (req, res) => {
  controller.add(person, req, res);
});

//删除一条数据
router.post("/deletePerson", (req, res) => {
  controller.delete(person, req, res);
});

router.post("/login", (req, res) => {
  controller.login(person, req, res);
});

module.exports = router;
