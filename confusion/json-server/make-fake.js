
const faker = require("faker");
const _ = require("lodash");

// set to us english
faker.locale = "en_US";

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomImage = faker.image.image(); // random contact card containing many properties

console.log("randomName =", randomName);
console.log("randomEmail =", randomEmail);
console.log("randomImage =", randomImage);

let myObj = {
    name: randomName,
    email: randomEmail
};

console.log("myObj =", myObj);

// 10 fake objects using lodash
    
let data = [];

_.times(10, ()=> {
    
    const randomName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const randomImage = faker.image.image();

    data.push({
        name: randomName,
        email: randomEmail,
        image: randomImage
    });

});

console.log("data =", JSON.stringify(data, null, 2));




