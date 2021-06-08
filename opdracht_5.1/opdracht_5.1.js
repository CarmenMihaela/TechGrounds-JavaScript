//a)
arrayA = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(arrayA)

//b)
fruit = ["Appel", "Aardbeei", "Sinasapel", "Frambose", "Ananas"]
console.log(fruit)

//c)
console.log(fruit[0], fruit[1])

//d)
let fruitIndex = Math.floor(Math.random() * 5)
// let fruitIndex = (Math.floor(Math.random() * 10)) % 5
console.log(fruitIndex)
console.log(fruit[fruitIndex])

//e)
console.log(fruit.length)

//g)
fruit[0] = "Peer"
console.log(fruit)

// h)
fruit.splice(0, 0, fruit[1])
fruit.pop(fruit[2])
console.log(fruit)

// let element1 = fruit[0]
// let element2 = fruit[1]
// fruit[0] = element2
// fruit[1] = element1
// console.log(fruit)



