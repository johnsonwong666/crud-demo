const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    hobby: String,
    hometown: String,
}, {
    collection: 'myData'
})


module.exports = mongoose.model('person', personSchema)