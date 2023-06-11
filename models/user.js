const mongoose =  require('mongoose')

const usersSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('users',usersSchema)