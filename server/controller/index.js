const jwt = require("jsonwebtoken");

exports.login = async function(model, req, res) {
  const result = await model.findOne({ name: req.body.name });
  if (result) {
    let token =
      "Bearer " +
      jwt.sign(
        {
          name: req.body.name,
        },
        "secret12345",
        {
          expiresIn: 60 * 60 * 24,
        }
      );
    res.json({
      success: true,
      message: "success",
      token: token,
    });
  } else {
    res.json({
      success: false,
      message: "success",
    });
  }
};

exports.getAll = function(model, req, res) {
  model.find({}).then((result) => {
    res.send(result);
  });
};

exports.getDetailById = function(model, req, res) {
  model
    .findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};

exports.update = function(model, req, res) {
  model
    .updateOne(
      {
        // name: req.body.name
        _id: req.body.id,
      },
      {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        hobby: req.body.hobby,
        hometown: req.body.hometown,
      }
    )
    .then((result) => {
      res.json(res);
    })
    .catch((err) => res.json(err));
};

exports.add = function(model, req, res) {
  model.create(req.body, (err, result) => {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

exports.delete = function(model, req, res) {
  model
    .findByIdAndRemove({
      _id: req.body.id,
    })
    .then((result) => res.send(`${result.name} 删除成功`))
    .catch((err) => res.json(err));
};
