//引入express路由
const express = require('express')
const router = express.Router()

//引入模型
const person = require('../models/person')


//查询全部数据
router.get('/getPerson', (req, res) => {
    person.find({}).then((result) => {
        res.send(result)
    })
})

//根据id查询数据
router.get('/person/:id', (req, res) => {
    person.findById(req.params.id).then(result => {
        res.json(result)
    }).catch(err => res.json(err))
})


//根据id修改数据
router.post('/updatePerson', (req, res) => {
    person.updateOne({
            // name: req.body.name
            _id: req.body.id
        }, {
            name: req.body.name,
            age: req.body.age,
            sex: req.body.sex,
            hobby: req.body.hobby,
            hometown: req.body.hometown
        })
        .then(result => {
            res.json(res)
        })
        .catch(err => res.json(err))
})


//增加一条数据
router.post('/addPerson', (req, res) => {
    person.create(req.body, (err, result) => {
        console.log(req.body)
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


//删除一条数据
router.post('/deletePerson', (req, res) => {
    person.findByIdAndRemove({
            _id: req.body.id
        })
        .then(result => res.send(`${result.name} 删除成功`))
        .catch(err => res.json(err))
})


module.exports = router