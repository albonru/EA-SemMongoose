require('../connection');
const User = require('../models/User');
const Parking = require('../models/Parking');

const deleteCRUD = async () => {
    const result = await User.findByIdAndDelete('fb24nc3782ec23')
    console.log(result);
};

deleteCRUD();