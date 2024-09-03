const { Types } = require('mongoose')
const mongoose = require('mpngoose')



const userSchema = mongoose.Schema({
    name: String,
    email : String,
    contact : Number,
    discount : {
        type : Number,
        default : 0
    },
    bgcolor : String,
    panelcolor : String,
    textcolor : String
})



module.exports = mongoose.model('user', userSchema)