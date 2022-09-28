const { Schema, model } = require('mongoose');

const parkingSchema = new Schema({
    address: String,
    difficulty: Number,
    price: {
        type: Number,
        default: 0
    }
});

module.exports = model('Parking', parkingSchema);