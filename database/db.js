const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shakkyr:test123@reaturant-mern.g6per.mongodb.net/UsersList?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology : true
    })

        console.log('Database connection success');
    }catch(err) {
        console.log(err);
    }
}

module.exports = connectDB