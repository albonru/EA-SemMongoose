require('../connection');
const User = require('../models/User');
const Parking = require('../models/Parking');

const searchCRUD = async () => {
    const users = await User.find({});
    console.log(users);
}

searchCRUD();