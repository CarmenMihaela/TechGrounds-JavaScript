//a)
function sayHello() {
    console.log("Hello World!")
}

document.getElementById('hello').onclick = sayHello


//b) c)
let userInput = document.getElementById('user_input')


userInput.addEventListener('change', (event) => {
    console.log(userInput)
})

// <input id="user_input" type="text">

//d)

function double(param) {
    return param * 2
}
let result = double(10)
console.log(result)

//testing git
