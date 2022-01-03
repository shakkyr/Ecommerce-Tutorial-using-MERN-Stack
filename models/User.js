const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type : String,
        require : true
    },
    role: {
        type: Number,
        default : 0
    }
}, {timestamps : true}
);


const User = mongoose.model('User', UserSchema)

module.exports = User;