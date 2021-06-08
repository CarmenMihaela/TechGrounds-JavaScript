//a)
document.getElementById('random_nr').onclick = function giveNumber () {
    console.log(Math.random())
}

//b)
function giveFloor(x) {
    console.log(Math.floor(Math.random() * x))
} 

giveFloor(3.7)
giveFloor(7)
giveFloor(100)
//we get integers

//c)  
console.log(Math.min(0, 7 , 9))
console.log(Math.max(-2, -1))
