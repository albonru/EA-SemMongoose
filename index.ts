require('./connection')
require('./models/*')


// usign the model
//const user = require('./models/User')

// creating a new document vase on the model
const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: 'elgrillo27',
    password: '1234',
    name: 'Pepito Grillo'
})

console.log('created user: ', user)

// saving the created document
user.save((err, document) => {
    if (err) console.log(err);
    console.log('saved: ', document);
});

const parking = new Parking({
    owner: user._id,
    address: 'C/micasa',
    difficulty: 2,
    price: 250
})

console.log('created parking: ', parking)

parking.save(function (err) {
    if (err) console.log(err);
    console.log('saved: ', document);
})


// // alternativa amb async await
// async function main() {
//     const user = new User({
//         username: 'elgrillo27',
//         password: '1234',
//         name: 'Pepito Grillo'
//     });
//     const userSaved = await user.save();
//     return userSaved;
// }

// main()
//     .then(userSaved => console.log(userSaved))
//     .catch(err => console.log(err));