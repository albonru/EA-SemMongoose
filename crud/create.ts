require('../connection');
const User = require('../models/User');
const Parking = require('../models/Parking');

const createCRUD = async () => {

    const owner = new User({
        username: 'PaquitoChoco',
        password: '1234'
    });
    await owner.save();

    const plaça = new Parking({
        address: 'C/Fontaneria, 183',
        password: 'asdf'
    });
}

createCRUD();