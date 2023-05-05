const mongoose = require('mongoose');

const FirstSchema = new mongoose.Schema({
    // this is where you create your model structure
    // using key value pairs
    name: {
        type: String,
        required: [true, "Needs a Name"],
        minlength: [2, "must be at least 2 charaters"]
    },
    age: {
        type: Number,
        required: [true, "Needs a Name"],
        minlength: [2, "must be at least 2 charaters"]
    },
    hobby: {
        type: String,
        required: [true, "Needs a Name"],
        minlength: [2, "must be at least 2 charaters"]
    }
}, {timestamps: true});

const User = mongoose.model('User', FirstSchema);

module.exports = User;

// advanced way to export
/*module.exports = mongoose.model("User", FirstSchema );*/
