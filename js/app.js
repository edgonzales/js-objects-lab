console.log('Hello World!');
// defining an object literal
// key value pairs <- want in your language

const bigFoot = {
    name: 'Big Foot',
    color: 'Brown',
    isReal: true,
    height: 7,
    diet: 'vegetarian',
    woodlandFriends: [{name: 'bunny', age: 4}, {name: 'squirrel', age: 5}],
    eat(plant) {
        console.log(`Let's eat ${plant}`);
    },
    hide(location) {
        console.log(`Let's hide in the ${location}`);
    }
}

console.log(bigFoot.woodlandFriends[0].age);
console.log(bigFoot.woodlandFriends[1].name);

bigFoot.eat('tree');
bigFoot.hide('cave');



// Greet each woodland friend
function sayHello(name) {
    return `Hello, ${name}`
}

bigFoot.woodlandFriends.forEach(function(friend){
    console.log(sayHello(friend));
})


// retrieve 'deer'
console.log(bigFoot.woodlandFriends[2]);

// I want to see if bigFoot is real
// retrieve the value of the isReal key (property) in bigfoot
console.log(bigFoot.isReal);

// See what diet bigFoot has
console.log(bigFoot.diet);

// Change the color of bigFoot
bigFoot.color = 'strawberry blonde';
console.log(bigFoot.color);

// Change diet
bigFoot.diet = 'omnivore';
console.log(bigFoot.diet);