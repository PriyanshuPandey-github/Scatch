const { Types } = require('mongoose')
const mongoose = require('mpngoose')


const productSchema = mongoose.Schema({
    image : String,
    name: String,
    email : String,
    price : Number,
    password : String,
    cart : {
        type : Array,
        default : []
    },
    orders : {
        type : Array,
        default : []
    },
    isAdmin : Boolean,

})



module.exports = mongoose.model('user', productSchema)