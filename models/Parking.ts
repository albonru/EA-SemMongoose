const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const parkingSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User' },
    address: String,
    difficulty: Number,
    price: {
        type: Number,
        default: 0
    }
});

const Parking = mongoose.model('Parking')
//module.exports = model('Parking', parkingSchema);