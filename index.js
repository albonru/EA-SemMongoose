require('./connection')

// usign the model
const user = require('./models/user')

// creating a new document vase on the model
const user = new user({
    username: 'elgrillo27',
    password: '1234',
    name: 'Pepito Grillo'
})

console.log('created user: ')

// saving the created document
user.save((err, document) => {
    if (err) console.log(err);
    console.log('saved: ', document);
});


// alternativa amb async await
async function main() {
    const user = new User({
        username: 'elgrillo27',
        password: '1234',
        name: 'Pepito Grillo'
    });
    const userSaved = await user.save();
    return userSaved;
}

main()
    .then(userSaved => console.log(userSaved))
    .catch(err => console.log(err));