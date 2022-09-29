const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//const { Schema, Model } = require('mongoose')

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    name: String,
    parkings: [{ type: Schema.Types.ObsectId, ref: 'Parking '}]
});

// const parkingSchema = new Schema({
//     owner: {type: Schema.Types.ObjectId, ref: 'User' },
//     address: String,
//     difficulty: Number,
//     price: {
//         type: Number,
//         default: 0
//     }
// });

// const Parking = mongoose.model('Parking')
// module.exports = model('Parking', parkingSchema);

//alt si poses a dalt const { Schema, Model }
//module.exports = new model('User', userSchema);
const User = mongoose.model('User', userSchema);
