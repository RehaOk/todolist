const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todo = new Schema({
    content: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    checkedDays: {
        type: String,
        required: false,
    }
});

// Export function to create "Todo" model class
module.exports = mongoose.model('Todo', todo );