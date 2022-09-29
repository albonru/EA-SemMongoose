require('../connection');
const User = require('../models/User');
const Parking = require('../models/Parking');

const updateCRUD = async () => {
    const user = await User.findOneAndUpdate({username: 'PaquitoChoco'}, {
        username: 'elChocopaqui'
    }, {new: true});
    console.log(user);
};

updateCRUD();