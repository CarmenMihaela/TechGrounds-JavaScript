//a)
let objectConstructed = new Object();
objectConstructed.name = "Fuzzy"
objectConstructed.fur = "white"
objectConstructed.type = "tiger"

console.log(objectConstructed)

let literallyConstructed = {
    name: "Fluffy",
    fur: "black",
    type: "cat"
}

console.log(literallyConstructed)

function Pet(name, fur, type) {
    this.name = name
    this.fur = fur
    this.type = type
}

let functionConstructed = new Pet("Gringo", "brown", "Guineea pig")
console.log(functionConstructed)

let singletonConstructed = new function() {
    this.name = "Black Beauty",
    this.fur = "black",
    this.type = "horse"
}

console.log(singletonConstructed)

class Animal {
    constructor(name, fur, type) {
        this.name = "Johnny"
        this.fur = "none"
        this.type  = "pig"
    }

    eatAlot() {
        console.log("That's what a pig does.")
    }
}

let classConstructed = new Animal("Johnny", "none", "pig")
console.log(classConstructed)

//b) 
const first = Object.create(objectConstructed)
first.name = "First"
first. fur = "short"
first.type = "hamster"
console.log(first)

const second = Object.create(literallyConstructed)
second.name = "First"
second.fur = "short"
second.type = "hamster"
console.log(second)

const third = Object.create(functionConstructed)
third.name = "First"
third.fur = "short"
third.type = "hamster"
console.log(third)

const fourth = Object.create(singletonConstructed)
fourth.name = "First"
fourth.fur = "short"
fourth.type = "hamster"
console.log(fourth)

const fifth = Object.create(classConstructed)
fifth.name = "First"
fifth.fur = "short"
fifth.type = "hamster"
console.log(fifth)

//c) 
list10 = [
    {name: "Carmen",
    age: 36},
    {name: "Elly",
    age: 35},
    {name: "Adrienn",
    age: 30},
    {name: "Patrick",
    age: 36},
    {name: "Maher",
    age: 25},
    {name: "Hellen",
    age: 28},
    {name: "John",
    age: 29},
    {name: "Robert",
    age: 20},
    {name: "Will",
    age: 38},
    {name: "Mary",
    age: 40}
]

list10.sort((a, b) => (a.age > b.age ) ? 1 : -1)
console.log(list10)


