//a)

function addShine() {
    document.querySelector("img").classList.add("shine")
    document.getElementsByClassName("shiny_obj")[0].style.border = "2px solid yellow";//ByClassName gets a list
    document.getElementsByTagName("LI")[1].innerHTML = "Scheveningen beach"
}
document.getElementById("shine_maker").onclick = addShine

function alreadySubscribed() {
    document.querySelectorAll("button")[1].innerText = "You already subscribed"
}

document.getElementById("subscriber").onclick = alreadySubscribed

//b)
let userInput = document.getElementById('user_input')


userInput.addEventListener('input', (event) => {
    console.log(userInput.value)
})